import Image from "next/image";


export default function Hero() {
    return (
        <div className="bg-hero w-full h-[677px] flex flex-wrap   text-left ">
            <div className="flex  flex-wrap items-end justify-start bg-gradient-to-t from-black to-transparent w-full ">
                <div className="flex flex-col gap-9  pl-32 h-full ">
                    <div className="bg-black/50 w-fit rounded-full p-2 uppercase text-[9px] text-white mt-60 text-left">
                        Jack Irving
                    </div>
                    <div className="text-white font-extrabold text-6xl text-left">
                        FROM THE DEEP METAVERSE
                    </div>
                    <div className="uppercase text-[#D7FD35] text-left">
                        The Quixotic Collection
                    </div>
                    <button className="bg-[#D7FD35] py-6 text-black px-9 rounded-full w-40">
                        Buy Now
                    </button>
                </div>
                <div className="flex w-fit h-fit gap-6 ">

                    <Image
                        src="/Hero/jack_irving.svg"
                        alt="location image"
                        width={68}
                        height={68}
                        className="w-full h-full p-4 rounded-xl bg-black/30 "
                    />
                    {/* <div className="bg-[#D7FD35] w-20 h-2 rounded-full"></div> */}
                    <Image
                        src="/Hero/francis_de_lara.svg"
                        alt="location image"
                        width={68}
                        height={68}
                        className="w-full h-full p-4 rounded-xl bg-black/30 "
                    />
                    <Image
                        src="/Hero/division.svg"
                        alt="location image"
                        width={68}
                        height={68}
                        className="w-full h-full p-4 rounded-xl bg-black/30 "
                    />
                </div>
            </div>
        </div>
    )
}