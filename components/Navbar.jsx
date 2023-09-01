import Image from "next/image";
import Logo from "@/public/images/fundinit_Logo.png";
import Arrow from "@/public/images/arrow_.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-[1rem] lg:px-[5rem] lg:py-[2.5rem] flex items-center justify-between">
      <div className="w-[5rem] lg:w-[10rem]">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex items-center px-2 gap-3 py-1 lg:px-3 lg:gap-5 cursor-pointer text-white rounded-full bg-gradient-to-r from-violet-800 to-violet-950 ">
        <Link href="mailto:pitch@fundinit.com" legacyBehavior>
          <a target="_blank" className="lg:text-[1.2rem]">
            contact
          </a>
        </Link>
        <div className="w-[1.5rem]">
          <Image src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
