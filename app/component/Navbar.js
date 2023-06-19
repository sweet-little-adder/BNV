import ConnectWalletButton from "@/app/component/ConnectWalletButton";

const MenuItem = ["Showroom", "Market", "Stories", "About"];
export default function Navbar() {
    return (
        <div className="flex bg-black h-[70px] items-center justify-between  text-white font-medium text-center text-[10px] px-6">
            <svg
                width="43"
                height="33"
                viewBox="0 0 43 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-[42.07px] h-[32.67px]"
                preserveAspectRatio="none"
            >
                <g clip-path="url(#clip0_1_460)">
                    <path
                        d="M12.0872 13.2761C12.0872 13.8452 11.9695 14.2839 11.7341 14.5922C11.4987 14.9005 11.0475 15.0552 10.3804 15.0561C11.023 15.0561 11.4617 15.1973 11.6967 15.4797C11.9236 15.7423 12.0489 16.0774 12.0497 16.4244V22.1527C12.0497 22.6845 12.0558 23.1665 12.0681 23.5987C12.0803 24.0308 12.0865 24.3953 12.0865 24.6923V25.2882C12.0939 25.7484 11.9989 26.2045 11.8082 26.6234C11.6232 27.0188 11.1475 27.2165 10.3811 27.2165H0.000715256V0.0771484H10.3811C10.7761 0.0771484 11.0851 0.132927 11.3083 0.244483C11.5104 0.337562 11.6832 0.484037 11.8082 0.668116C11.9251 0.85492 12.0013 1.0642 12.0321 1.28238C12.0691 1.5216 12.0875 1.76332 12.0872 2.00538V13.2761ZM4.22348 12.6089H7.04808C7.39409 12.6089 7.61041 12.5409 7.69703 12.4049C7.78318 12.2693 7.82696 12.0405 7.82696 11.7186V5.63874C7.82696 5.31749 7.78318 5.08943 7.69703 4.95316C7.61088 4.81689 7.39409 4.74911 7.04808 4.74911H4.22348V12.6089ZM7.82484 17.2435C7.82484 16.9222 7.78106 16.6934 7.69491 16.5572C7.60876 16.4209 7.39197 16.3531 7.04596 16.3531H4.22348V22.7676H7.04808C7.39409 22.7676 7.61041 22.6996 7.69703 22.5636C7.78318 22.428 7.82696 22.1993 7.82696 21.8773L7.86368 17.9107V18.9119L7.82484 17.2435Z"
                        fill="white"
                    ></path>
                    <path
                        d="M33.8416 0L34.4121 3.69055H27.7743V27.2135H23.5459L19.0972 12.68V27.2135H14.8688V0H19.0958L23.5445 14.5341V0H33.8416Z"
                        fill="white"
                    ></path>
                    <path
                        d="M38.2179 0.0739746H42.0741L38.4022 27.2133H33.9909L30.9036 6.46306H34.7592L36.1425 15.3862L38.2179 0.0739746Z"
                        fill="white"
                    ></path>
                    <path d="M0.0001297 32.6669V28.989H42.0739V32.6669H0.0001297Z" fill="white"></path>
                </g>
                <defs>
                    <clipPath id="clip0_1_460">
                        <rect width="42.0737" height="32.667" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>

            <div className="flex gap-5 mr-[-500px]">
                {MenuItem.map((item) =>
                    <div
                        className="flex justify-center items-center uppercase flex-grow-0 flex-shrink-0 relative gap-5 px-[15px] py-2.5 rounded-[20px] bg-[#0a0a0a] border-[0.79px] border-[#464646]"
                    >

                        {item}

                    </div>
                )}

            </div>
            <ConnectWalletButton/>
        </div>

    )
}
