import Body from "@/components/Body"
import Investments from "@/components/Investments"
import Navbar from "@/components/Navbar"
import Founder from "@/components/Founder"
import Footer from "@/components/Footer"



const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Body />
      <Investments />
      <Founder />
      <Footer />
    </div>
  )
}


export default Home