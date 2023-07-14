import Image from "next/image"
import LinkedIn from '@/public/images/linked.png'
import Twitter from '@/public/images/twit.svg'
import Wellfound from '@/public/images/wellfound.png'
import Email from '@/public/images/mail.png'


const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto gap-8 py-3 pb-6 bg-white">
        <a href="https://www.linkedin.com/company/fundinit/" className="w-[1.4rem]" alt="linkedin">
            <Image src={LinkedIn} alt="linkedin image" />
        </a>
        <a href="https://twitter.com/angelfunds5" className="w-[1.5rem]" alt="twitter">
            <Image src={Twitter} alt="twitter image" />
        </a>
        <a href="https://angel.co/company/fundinit" className="w-[1.2rem]" alt="wellfound">
            <Image src={Wellfound} alt="wellfound image" />
        </a>
        <a href="mailto:pitch@fundinit.com" className="w-[1.5rem]" alt="email">
            <Image src={Email} alt="email image" />
        </a>
    </div>
  )
}

export default Footer