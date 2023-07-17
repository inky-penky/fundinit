import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from '@/public/images/menu.svg'
import CancelMenu from '@/public/images/x.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  };
  
  
  return (
    <div className="">
      <div className="lg:hidden">
        <div className="flex items-center justify-end pt-2 pr-2">
          <div className={`${isOpen? 'hidden':'block'}`} onClick={handleMenuClick}>
            <Image src={MobileMenu} alt="hamburger" />
          </div>
          <div className={`${isOpen? 'block':'hidden'}`} onClick={handleMenuClick}>
            <Image src={CancelMenu} alt="hamburger" />
          </div>
        </div>
        
        <div className={`flex flex-col items-center gap-8 pt-8 text-white bg-transparent ${isOpen? 'block':'hidden'}`}>
        <Link href="#" alt="Home" legacyBehavior><a className="hover:text-purple-700">Home</a></Link>
        <a href="https://venture.angellist.com/fundinit/syndicate" alt="Companies" 
        className="hover:text-purple-700">Companies
        </a>
        <Link href="#" alt="Fellowship" legacyBehavior><a className="hover:text-purple-700">Fellowship</a></Link>
        <Link href="#" alt="Team" legacyBehavior><a className="hover:text-purple-700">Team</a></Link>
        </div>
      </div>
      
      <div className="lg:flex justify-end pt-8 pr-[10rem] text-white bg-transparent gap-8 hidden ">
        <Link href="#" alt="Home" legacyBehavior><a className="hover:text-purple-700">Home</a></Link>
        <a href="https://venture.angellist.com/fundinit/syndicate" alt="Companies" 
        className="hover:text-purple-700">Companies
        </a>
        <Link href="#" alt="Fellowship" legacyBehavior><a className="hover:text-purple-700">Fellowship</a></Link>
        <Link href="#" alt="Team" legacyBehavior><a className="hover:text-purple-700">Team</a></Link>
      </div>
    </div>
  )
}

export default Navbar
