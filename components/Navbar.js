import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-end pt-8 pr-[10rem] text-white bg-transparent ">
        <Link href="#" alt="home" legacyBehavior><a className="mr-8 hover:text-purple-700">Home</a></Link>
        <Link href="#" alt="home" legacyBehavior><a className="mr-8 hover:text-purple-700">Companies</a></Link>
        <Link href="#" alt="home" legacyBehavior><a className="mr-8 hover:text-purple-700">Fellowship</a></Link>
        <Link href="#" alt="home" legacyBehavior><a className="mr-8 hover:text-purple-700">Team</a></Link>
    </div>
  )
}

export default Navbar