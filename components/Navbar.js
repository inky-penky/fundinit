import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-end pt-8 pr-[10rem] text-white bg-transparent gap-8">
        <Link href="#" alt="Home" legacyBehavior><a className="hover:text-purple-700">Home</a></Link>
        <Link href="#" alt="Companies" legacyBehavior><a className="hover:text-purple-700">Companies</a></Link>
        <Link href="#" alt="Fellowship" legacyBehavior><a className="hover:text-purple-700">Fellowship</a></Link>
        <Link href="#" alt="Team" legacyBehavior><a className="hover:text-purple-700">Team</a></Link>
    </div>
  )
}

export default Navbar
