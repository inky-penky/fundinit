import Image from "next/image"
import Logos from "@/public/images/Logos.png"





function Investments() {
  return (
    <div className="flex flex-col items-center gap-7 lg:mb-[10rem] mb-[3rem]">
        <div className="">
            <h2 className="text-[#706B7E] font-semibold lg:text-[1.5rem] text-[1.2rem]">Investments</h2>
        </div>
        <div className="flex items-center max-w-[40rem]">
          <Image src={Logos} alt="logos" />
        </div>
    </div>
  )
}

export default Investments