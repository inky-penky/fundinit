import Body from "@/components/Body"
import Footer from "@/components/Footer"
import Investments from "@/components/Investments"
import Navbar from "@/components/Navbar"
import Founder from "@/components/Founder"



const Home = () => {
  return (
    <div className='w-full h-full bg-black '>
      <Navbar />
      <Body />
      <Investments />
      <Founder />
      <Footer />
    </div>
  )
}


export default Home