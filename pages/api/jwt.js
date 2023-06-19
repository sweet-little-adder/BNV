import {recoverPersonalSignature} from "@metamask/eth-sig-util";
import toHex from "../../helper/hex"
import jwt from "jsonwebtoken";
import config from "../../config/base"

export default function handler(
  req,
  res
) {
  if (req.method !== 'POST') {
    res.status(405).send({message: 'Only POST requests allowed'})
    return
  }

  const {address, signature} = req.body

  const existingNonce = "abc";

  const recoveredAddress = recoverPersonalSignature({
    data: `0x${toHex(existingNonce)}`,
    signature: signature,
  });

  if (recoveredAddress === address) {
    const token = jwt.sign({address: address}, config.jwtPrivateKey);

    res.status(200).json({data: token})
  } else {
    throw Error("Wrong signature")
  }
}
