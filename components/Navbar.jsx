import Image from "next/image"
import Logo from "@/public/images/fundinit_Logo.png"
import Arrow from "@/public/images/arrow_.svg"




const Navbar = () => {
  
  
  
  return (
    <div className="p-[1rem] lg:px-[5rem] lg:py-[2.5rem] flex items-center justify-between">
      <div className="w-[5rem] lg:w-[10rem]">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex items-center px-2 gap-3 py-1 lg:px-3 lg:gap-5 text-white rounded-full bg-[#CFCFCF36] ">
        <a href="#" alt="" target="_blank" className="lg:text-[1.2rem]">contact</a>
        <div className="w-[1.5rem]">
          <Image src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
