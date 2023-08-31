import Body from "@/components/Body"
import Investments from "@/components/Investments"
import Navbar from "@/components/Navbar"
import Founder from "@/components/Founder"



const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Body />
      <Investments />
      <Founder />
    </div>
  )
}


export default Home