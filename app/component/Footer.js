export default function Footer() {
    return (
        <>
            <div className="w-full h-[341px] relative overflow-hidden bg-black">
                <p
                    className="w-[78px] absolute left-[505px] top-[310px] text-[10px] font-medium text-left text-white"
                >
                    © 2021 BNV
                </p>
                <p className="w-[473px] h-[19px] absolute left-[72px] top-[85px] text-xs text-left text-white">
                    Sign up to get our top stories and auctions delivered
                </p>
                <div className="flex justify-start items-start absolute left-[72px] top-[115.5px] gap-3">
                    <div
                        className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[428px] relative gap-2.5 px-3.5 py-3 rounded bg-white"
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#bbb]">Email Address</p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-3 rounded bg-[#d7fd35]"
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-black">Subscribe</p>
                    </div>
                </div>
                <svg
                    width="2"
                    height="341"
                    viewBox="0 0 2 341"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[788px] top-[-1px]"
                    preserveAspectRatio="none"
                >
                    <path d="M1 0L0.999985 341" stroke="#464646"></path>
                </svg>
                <div className="w-[232px] h-[184px]">
                    <div className="flex flex-col justify-start items-start absolute left-[879px] top-[79px] gap-4">
                        <p className="flex-grow-0 flex-shrink-0 w-[232px] h-6 text-xs text-left uppercase text-white">
                            About
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[232px] h-6 text-xs text-left uppercase text-white">
                            Help Centre
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[232px] h-6 text-xs text-left uppercase text-white">
                            Terms and Conditions
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[232px] h-6 text-xs text-left uppercase text-white">
                            Privacy Policy
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[232px] h-6 text-xs text-left uppercase text-white">
                            SUSTAINABILITY STATEMENT
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center absolute left-[72px] top-[191px] gap-6">
                    <svg
                        width="19"
                        height="22"
                        viewBox="0 0 19 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[18.74px] h-[21.42px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M7.43149 8.98376C6.82113 8.98376 6.33927 9.51917 6.33927 10.1724C6.33927 10.8255 6.83184 11.3609 7.43149 11.3609C8.04185 11.3609 8.52371 10.8255 8.52371 10.1724C8.53442 9.51917 8.04185 8.98376 7.43149 8.98376ZM11.3399 8.98376C10.7296 8.98376 10.2477 9.51917 10.2477 10.1724C10.2477 10.8255 10.7403 11.3609 11.3399 11.3609C11.9503 11.3609 12.4321 10.8255 12.4321 10.1724C12.4321 9.51917 11.9503 8.98376 11.3399 8.98376Z"
                            fill="white"
                        ></path>
                        <path
                            d="M16.5439 0H2.19515C0.985139 0 0 0.985139 0 2.20586V16.6831C0 17.9038 0.985139 18.889 2.19515 18.889H14.3381L13.7705 16.908L15.1412 18.1822L16.4368 19.3815L18.7391 21.4161V2.20586C18.7391 0.985139 17.7539 0 16.5439 0ZM12.4106 13.9847C12.4106 13.9847 12.0251 13.5242 11.7039 13.1173C13.1066 12.7211 13.642 11.8431 13.642 11.8431C13.203 12.1322 12.7854 12.3357 12.4106 12.4749C11.8752 12.6997 11.3612 12.8496 10.8579 12.9353C9.82998 13.1281 8.88767 13.0745 8.08457 12.9246C7.47421 12.8068 6.94951 12.6355 6.51049 12.4642C6.2642 12.3678 5.9965 12.25 5.7288 12.1001C5.69667 12.0787 5.66455 12.068 5.63243 12.0465C5.61101 12.0358 5.6003 12.0251 5.58959 12.0144C5.39685 11.9073 5.28977 11.8324 5.28977 11.8324C5.28977 11.8324 5.80376 12.689 7.16368 13.0959C6.84243 13.5028 6.44624 13.9847 6.44624 13.9847C4.07976 13.9097 3.18029 12.3571 3.18029 12.3571C3.18029 8.90909 4.72224 6.11429 4.72224 6.11429C6.2642 4.95782 7.7312 4.98994 7.7312 4.98994L7.83828 5.11844C5.91083 5.67526 5.02207 6.52119 5.02207 6.52119C5.02207 6.52119 5.25764 6.3927 5.65384 6.21066C6.7996 5.70738 7.70979 5.56818 8.08457 5.53605C8.14881 5.52535 8.20235 5.51464 8.2666 5.51464C8.91979 5.42897 9.65865 5.40756 10.4296 5.49322C11.4469 5.61101 12.5391 5.91084 13.6527 6.52119C13.6527 6.52119 12.8068 5.71809 10.9864 5.16127L11.1364 4.98994C11.1364 4.98994 12.6034 4.95782 14.1453 6.11429C14.1453 6.11429 15.6873 8.90909 15.6873 12.3571C15.6873 12.3571 14.7771 13.9097 12.4106 13.9847Z"
                            fill="white"
                        ></path></svg
                    ><svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M10.7391 0.708008C12.4222 0.708008 13.7963 0.727732 14.8613 0.767179C15.7686 0.806627 16.5773 0.964418 17.2874 1.24055C17.9711 1.50354 18.5629 1.88487 19.0625 2.38454C19.5622 2.88421 19.9435 3.47592 20.2065 4.15968C20.4826 4.86974 20.6404 5.67842 20.6799 6.58572C20.7193 7.65081 20.7391 9.0249 20.7391 10.708C20.7391 12.3911 20.7193 13.7652 20.6799 14.8303C20.6404 15.7376 20.4826 16.5463 20.2065 17.2563C19.9435 17.9401 19.5622 18.5318 19.0625 19.0315C18.5629 19.5312 17.9711 19.9125 17.2874 20.1755C16.5773 20.4516 15.7686 20.6094 14.8613 20.6488C13.7963 20.6883 12.4222 20.708 10.7391 20.708C9.05596 20.708 7.68186 20.6883 6.61677 20.6488C5.70947 20.6094 4.9008 20.4516 4.19074 20.1755C3.50698 19.9125 2.91526 19.5312 2.41559 19.0315C1.91592 18.5318 1.53459 17.9401 1.2716 17.2563C0.99547 16.5463 0.837679 15.7376 0.798231 14.8303C0.758783 13.7652 0.739059 12.3911 0.739059 10.708C0.739059 9.0249 0.758783 7.65081 0.798231 6.58572C0.837679 5.67842 0.99547 4.86974 1.2716 4.15968C1.53459 3.47592 1.91592 2.88421 2.41559 2.38454C2.91526 1.88487 3.50698 1.50354 4.19074 1.24055C4.9008 0.964418 5.70947 0.806627 6.61677 0.767179C7.68186 0.727732 9.05596 0.708008 10.7391 0.708008ZM10.7391 2.00978C8.99021 2.00978 7.56352 2.02951 6.45898 2.06895C5.74892 2.09525 5.09146 2.22017 4.48659 2.44371C3.53985 2.83819 2.86924 3.5088 2.47476 4.45554C2.25122 5.06041 2.1263 5.71787 2.10001 6.42793C2.06056 7.53247 2.04083 8.95916 2.04083 10.708C2.04083 12.4569 2.06056 13.8836 2.10001 14.9881C2.1263 15.6981 2.25122 16.3556 2.47476 16.9605C2.86924 17.9072 3.53985 18.5778 4.48659 18.9723C5.09146 19.1958 5.74892 19.3208 6.45898 19.3471C7.56352 19.3865 8.99021 19.4062 10.7391 19.4062C12.4879 19.4062 13.9146 19.3865 15.0191 19.3471C15.7292 19.3208 16.3867 19.1958 16.9915 18.9723C17.9383 18.5778 18.6089 17.9072 19.0034 16.9605C19.2269 16.3556 19.3518 15.6981 19.3781 14.9881C19.4176 13.8836 19.4373 12.4569 19.4373 10.708C19.4373 8.95916 19.4176 7.53247 19.3781 6.42793C19.3518 5.71787 19.2269 5.06041 19.0034 4.45554C18.6089 3.5088 17.9383 2.83819 16.9915 2.44371C16.3867 2.22017 15.7292 2.09525 15.0191 2.06895C13.9146 2.02951 12.4879 2.00978 10.7391 2.00978ZM10.7391 14.712C11.8436 14.712 12.7871 14.3208 13.5694 13.5384C14.3518 12.756 14.743 11.8125 14.743 10.708C14.743 9.60347 14.3518 8.66001 13.5694 7.87763C12.7871 7.09525 11.8436 6.70406 10.7391 6.70406C9.63452 6.70406 8.69106 7.09525 7.90868 7.87763C7.1263 8.66001 6.73511 9.60347 6.73511 10.708C6.73511 11.8125 7.1263 12.756 7.90868 13.5384C8.69106 14.3208 9.63452 14.712 10.7391 14.712ZM10.7391 5.5798C12.1592 5.5798 13.3689 6.07947 14.3683 7.07882C15.3676 8.07816 15.8673 9.28789 15.8673 10.708C15.8673 12.1281 15.3676 13.3379 14.3683 14.3372C13.3689 15.3365 12.1592 15.8362 10.7391 15.8362C9.31894 15.8362 8.10921 15.3365 7.10987 14.3372C6.11053 13.3379 5.61085 12.1281 5.61085 10.708C5.61085 9.28789 6.11053 8.07816 7.10987 7.07882C8.10921 6.07947 9.31894 5.5798 10.7391 5.5798ZM17.2874 5.38256C17.2874 5.7113 17.169 5.99072 16.9324 6.22083C16.6957 6.45094 16.4064 6.566 16.0645 6.566C15.7358 6.566 15.4564 6.45094 15.2262 6.22083C14.9961 5.99072 14.8811 5.7113 14.8811 5.38256C14.8811 5.04068 14.9961 4.7514 15.2262 4.51471C15.4564 4.27803 15.7358 4.15968 16.0645 4.15968C16.3932 4.15968 16.6792 4.28131 16.9225 4.52458C17.1658 4.76784 17.2874 5.05383 17.2874 5.38256Z"
                            fill="white"
                        ></path></svg
                    ><svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[22.05px] h-[17.93px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M22.7888 2.87172C21.978 3.23103 21.1069 3.4738 20.1911 3.58354C21.136 3.01816 21.8429 2.12831 22.1799 1.08004C21.2922 1.60734 20.3206 1.9785 19.3074 2.17739C18.6261 1.4499 17.7236 0.967714 16.7402 0.805684C15.7567 0.643654 14.7472 0.810848 13.8685 1.28131C12.9898 1.75177 12.291 2.49917 11.8806 3.40748C11.4702 4.31579 11.3712 5.33418 11.5989 6.30455C9.80007 6.21424 8.04039 5.74671 6.43399 4.9323C4.8276 4.11789 3.4104 2.97481 2.27437 1.57725C1.88593 2.24731 1.66257 3.02418 1.66257 3.85156C1.66214 4.59639 1.84556 5.32981 2.19656 5.98675C2.54756 6.64368 3.05529 7.20383 3.67469 7.61748C2.95635 7.59462 2.25385 7.40052 1.62567 7.05133V7.10959C1.6256 8.15425 1.98695 9.16675 2.64842 9.9753C3.30988 10.7839 4.23071 11.3387 5.25467 11.5456C4.58828 11.7259 3.88963 11.7525 3.21148 11.6233C3.50037 12.5221 4.06312 13.3081 4.82094 13.8713C5.57876 14.4344 6.49371 14.7465 7.4377 14.7638C5.83522 16.0218 3.85618 16.7041 1.81892 16.7011C1.45804 16.7012 1.09747 16.6802 0.739059 16.638C2.80699 17.9676 5.21421 18.6733 7.6727 18.6705C15.995 18.6705 20.5446 11.7777 20.5446 5.79958C20.5446 5.60536 20.5398 5.4092 20.531 5.21498C21.416 4.575 22.1799 3.78251 22.7869 2.87463L22.7888 2.87172Z"
                            fill="white"
                        ></path></svg
                    ><svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g clip-path="url(#clip0_1_533)">
                            <path
                                d="M19.1894 0.708008H2.49759C1.5859 0.708008 0.788818 1.36443 0.788818 2.2657V18.994C0.788818 19.9005 1.5859 20.708 2.49759 20.708H19.1842C20.1011 20.708 20.7888 19.8953 20.7888 18.994V2.2657C20.794 1.36443 20.1011 0.708008 19.1894 0.708008ZM6.98834 17.379H4.12302V8.47043H6.98834V17.379ZM5.65466 7.11592H5.63382C4.71692 7.11592 4.12302 6.43345 4.12302 5.57906C4.12302 4.70904 4.73255 4.0422 5.67029 4.0422C6.60803 4.0422 7.1811 4.70383 7.20194 5.57906C7.20194 6.43345 6.60803 7.11592 5.65466 7.11592ZM17.4598 17.379H14.5945V12.5079C14.5945 11.341 14.1777 10.5439 13.141 10.5439C12.3491 10.5439 11.8802 11.0805 11.6718 11.6015C11.5937 11.789 11.5729 12.0443 11.5729 12.3048V17.379H8.70754V8.47043H11.5729V9.71034C11.9896 9.11644 12.6408 8.26205 14.1569 8.26205C16.0376 8.26205 17.4598 9.50195 17.4598 12.1745V17.379V17.379Z"
                                fill="white"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_533">
                                <rect width="20" height="20" fill="white" transform="translate(0.788818 0.708008)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    )
}