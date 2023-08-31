import Image from "next/image"
import Sridhar from "@/public/images/sridhar.png"
import Sofia from "@/public/images/sofia.png"



function Founder() {
  return (
    <div className="flex flex-col items-center px-[1.5rem] gap-5 mb-[2rem]">
        <div className="max-w-[25rem]">
            <p className="text-[#DAD1F1] text-sm">
            We support teams in building high quality 
            companies and sustainable market leaders. We 
            operate out of San Francisco and fund in 
            Pre-Seed/Seed btw $250K to $1.25M in capital with 
            a global network of 50+ angels.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex gap-1">
                <div className="lg:w-[2rem] w-[1.5rem]">
                    <Image src={Sridhar} alt="founder_image" />
                </div>
                <div className="lg:w-[2rem] w-[1.5rem]">
                    <Image src={Sofia} alt="founder_image" />
                </div>
            </div>
            <div className="text-[#4A4861]">
                <p className="text-xs">
                Sridhar A. & Sofia F.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Founder