"use client";

import detectEthereumProvider from "@metamask/detect-provider";
import {useEffect, useState} from "react";
import toHex from "../../helper/hex"
import config from "../../config/base"

export default function ConnectWalletButton() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const [hasProvider, setHasProvider] = useState(false);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({silent: true})

      console.log("setHasProvider: " + Boolean(provider))
      setHasProvider(Boolean(provider)) // transform provider to true or false
    }

    getProvider()
  }, [])

  useEffect(() => {
    const data = window.localStorage.getItem('userData');
    if (data !== null) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const onPressConnect = async () => {
    setLoading(true);

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: config.chainId}],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        alert("This network is not available in your metamask, please add it")
      }
      alert("Failed to switch to the network")
    }

    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = accounts[0];

        console.log("handleLogin: " + account)
        await handleLogin(account);
      } else {
        // TODO fix me
        alert("Add support for mobile version")
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleLogin = async (address) => {
    const response = await fetch(`${config.baseUrl}/api/nonce`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"address": address})
    });

    const messageToSign = (await response.json()).data;

    if (!messageToSign) {
      throw new Error("Invalid message to sign");
    }

    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [
        `0x${toHex(messageToSign)}`,
        address,
      ],
    })

    const jwtResponse = await fetch(`${config.baseUrl}/api/jwt`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"address": address, "signature": signature})
    });

    const jwtToken = (await jwtResponse.json()).data;

    if (!jwtToken) {
      throw new Error("Invalid message to sign");
    }

    const profileResponse = await fetch(`${config.baseUrl}/api/profile`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"token": jwtToken})
    });

    const ethAddress = (await profileResponse.json()).address;

    if (!jwtToken) {
      throw new Error("Invalid message to sign");
    }

    setUserData({
      jwtToken: jwtToken,
      address: ethAddress
    })

    localStorage.setItem('userData', JSON.stringify({
      jwtToken: jwtToken,
      address: ethAddress
    }));
  };

  const onPressLogout = () => {
    setUserData(null);
  };

  const onPressInstallMetamask = () => {
    window.open('https://metamask.io/download/', '_blank');
  };

  return (
    <div>
      {hasProvider ? (
        userData && !loading ? (
          <button onClick={onPressLogout}>
            Disconnect from ${userData.address}
          </button>
        ) : loading ? (
          <button
            disabled
          >
            <div>Loading...</div>
          </button>
        ) : (
          <button onClick={onPressConnect}>
            Connect Wallet
          </button>
        )
      ) : (
        <button onClick={onPressInstallMetamask}>
          Install MetaMask
        </button>
      )}
    </div>
  );
};
