import Image from "next/image";

export default function Drops() {
    return (
        <div className="flex flex-col overflow-x-scroll/">
            <div className="text-4xl font-bold text-center text-white">Our Campaigns and Drops</div>
            <div
                className="flex justify-center items-center  gap-2.5 px-[50px] py-5 rounded-[40px] bg-black border border-[#d7fd35]"
            >
                <div className="flex-grow-0 flex-shrink-0 w-[136px] h-6 text-lg font-medium text-center text-white">
                    View all
                </div>
            </div>
            <div className="w-[350px] h-[448px] bg-drop1 ">
                <div className="w-[350px] h-[350px] bg-drop1">
                    {/* <Image
                        src="/Drops/drop1.svg"
                        alt="location image"
                        width={350}
                        height={448}
                        className="w-full h-full"
                    /> */}
                </div>
                <div className=" w-[350px] h-0.5">

                    <div className="w-[350px] h-0.5 absolute left-[54.5px] top-[1241.5px] bg-white"></div>
                    <div className="w-36 h-0.5 absolute left-[54.5px] top-[1241.5px] bg-[#d7fd35]"></div>
                </div>
                <div className="w-[350px] h-[448px]">
                    <div
                        className="w-[350px] h-[98px] absolute left-[54.5px] top-[1243.5px] rounded-bl-[20px] rounded-br-[20px] bg-[#323232]"
                    ></div>
                    <div
                        className="w-[350px] h-[448px] absolute left-[54.5px] top-[893.5px] rounded-bl-[20px] rounded-br-[20px] border border-[#333]"
                    ></div>
                    <p className="absolute left-[70px] top-[1294px] text-[11px] font-medium text-left text-white">
                        By: Mishka
                    </p>
                    <p className="absolute left-[70px] top-[1264px] text-xl font-bold text-left text-[#d7fd35]">
                        Exclusive Mishka NFT Drop
                    </p>
                </div>
                <div className="w-[83px] h-[26px]">
                    <p className="absolute left-[113px] top-[922px] text-xl font-medium text-left text-white">LIVE</p>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[82.5px] top-[926.5px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <circle cx="8" cy="8" r="8" fill="#D7FD35"></circle>
                    </svg>
                </div>
            </div>
            <div className="w-[591px] h-[467px] md:block hidden">
                <div className="w-[350px] h-[350px]">
                    <div className="w-[350px] h-[350px] absolute left-[424.5px] top-[893.5px] bg-[#dfdedf]"></div>
                    {/* <div className="w-[350px] h-[350px]"> */}
                    <Image
                        src="Drops/drop1.svg"
                        alt="location image"
                        width={350}
                        height={448}
                        className="w-full"
                    />

                </div>
                <div className="w-[350px] h-[448px]">
                    <div
                        className="w-[350px] h-[98px] absolute left-[424.5px] top-[1243.5px] rounded-bl-[20px] rounded-br-[20px] bg-[#323232]"
                    ></div>
                    <div
                        className="w-[350px] h-[448px] absolute left-[424.5px] top-[893.5px] rounded-bl-[20px] rounded-br-[20px] border border-[#333]"
                    ></div>
                    <p className="absolute left-[440px] top-[1294px] text-[11px] font-medium text-left text-white">
                        By: Weird Eyball
                    </p>
                    <p className="absolute left-[440px] top-[1264px] text-xl font-bold text-left text-[#d7fd35]">
                        Weird Eyball Drop
                    </p>
                </div>
                <div className="w-[81px] h-[26px]">
                    <p className="absolute left-[483px] top-[922px] text-xl text-left text-white">LIVE</p>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[452.5px] top-[926.5px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <circle cx="8" cy="8" r="8" fill="#D7FD35"></circle>
                    </svg>
                </div>
                <div className="w-[221px] h-9">
                    <div
                        className="w-[221px] h-9 absolute left-[553.5px] top-[875.5px] rounded-[50px] bg-[#d7fd35]"
                    ></div>
                    <p className="absolute left-[631px] top-[887px] text-[15px] font-medium text-left text-black">
                        12d 19h 28m 23s
                    </p>
                    <p className="absolute left-[566px] top-[887px] text-[15px] font-medium text-left text-black">
                        Ends in:
                    </p>
                </div>
                <div className="w-[221px] h-9">
                    <div
                        className="w-[221px] h-9 absolute left-[183.5px] top-[874.5px] rounded-[50px] bg-[#d7fd35]"
                    ></div>
                    <p className="absolute left-[261px] top-[886px] text-[15px] font-medium text-left text-black">
                        12d 19h 28m 23s
                    </p>
                    <p className="absolute left-[196px] top-[886px] text-[15px] font-medium text-left text-black">
                        Ends in:
                    </p>
                </div>
            </div>
            <div className="w-[351px] h-[466px]  md:block hidden">
                <div className="w-[351px] h-[351px]">
                    <div className="w-[350px] h-[350px]">
                        <div className="w-[350px] h-[350px]">
                            <Image
                                src="Drops/drop1.svg"
                                alt="location image"
                                width={350}
                                height={448}
                                className="w-full h-full"
                            />

                        </div>
                    </div>
                    <div
                        className="w-[351px] h-[135px] absolute left-[793.5px] top-[892.5px]"
                    // style="background: linear-gradient(to bottom, rgba(0,0,0,0.69) 0%, rgba(0,0,0,0.62) 10.94%, rgba(0,0,0,0.55) 22.4%, rgba(0,0,0,0.33) 48.44%, rgba(0,0,0,0.09) 100%);"
                    ></div>
                </div>
                <div className="w-[350px] h-[448px]">
                    <div
                        className="w-[350px] h-[98px] absolute left-[794.5px] top-[1243.5px] rounded-bl-[20px] rounded-br-[20px] bg-[#323232]"
                    ></div>
                    <div
                        className="w-[350px] h-[448px] absolute left-[794.5px] top-[893.5px] rounded-bl-[20px] rounded-br-[20px] border border-[#333]"
                    ></div>
                    <p className="absolute left-[810px] top-[1294px] text-[11px] font-medium text-left text-white">
                        By: Brand
                    </p>
                    <p className="absolute left-[810px] top-[1264px] text-xl font-bold text-left text-[#a30eff]">
                        Walking Ad Drop
                    </p>
                </div>
                <div className="w-[163px] h-[26px]">
                    <p className="absolute left-[853px] top-[922px] text-xl font-medium text-left text-white">
                        UPCOMING
                    </p>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[822.5px] top-[926.5px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <circle cx="8" cy="8" r="8" fill="#A30EFF"></circle>
                    </svg>
                </div>
                <div className="w-[229px] h-9">
                    <div
                        className="w-[229px] h-9 absolute left-[914.5px] top-[875.5px] rounded-[50px] bg-[#a30eff]"
                    ></div>
                    <p className="absolute left-[1000px] top-[887px] text-[15px] font-medium text-left text-white">
                        12d 19h 28m 23s
                    </p>
                    <p className="absolute left-[927px] top-[887px] text-[15px] font-medium text-left text-white">
                        Drops in:
                    </p>
                </div>
            </div>
            <div className="w-[348px] h-0.5 md:block hidden">
                <div className="w-[348px] h-0.5 absolute left-[425.5px] top-[1241.5px] bg-white"></div>
                <div className="w-[143.18px] h-0.5 absolute left-[425.5px] top-[1241.5px] bg-[#d7fd35]"></div>
            </div>
            <div className="w-[348px] h-0.5 md:block hidden">
                <div className="w-[348px] h-0.5 absolute left-[795.5px] top-[1241.5px] bg-white"></div>
                <div className="w-[143.18px] h-0.5 absolute left-[795.5px] top-[1241.5px] bg-[#d7fd35]"></div>
            </div>
            <div
                className="flex justify-center items-center  gap-2.5 px-12 py-5 rounded-[40px] bg-black border border-[#d7fd35] cursor-pointer"
            >
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-white">
                    Explore All Collections
                </p>
            </div>
        </div>
    )
}