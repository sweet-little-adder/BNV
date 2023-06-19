import Image from "next/image";

export default function Partners() {
    return (
        <>
            <div className="w-[1303px] h-[326px]">
                <p className="absolute left-[361px] top-[4715px] text-4xl font-bold text-center text-white">
                    We’ve Been Featured In
                </p>
                <div className="flex justify-start items-start  gap-12">
                    <Image
                        src="/Partners/partner1.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />
                    <Image
                        src="/Partners/partner1.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />   <Image
                        src="/Partners/partner2.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />   <Image
                        src="/Partners/partner3.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />   <Image
                        src="/Partners/partner4.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />
                    <Image
                        src="/Partners/partner5.png"
                        alt="location image"
                        width={222}
                        height={179}
                        className=" p-4 rounded-xl bg-black/30 flex-grow-0 flex-shrink-0 object-contain"
                    />
                </div>
            </div>
        </>
    )
} 