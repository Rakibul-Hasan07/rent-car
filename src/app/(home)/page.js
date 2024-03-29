import AllBrands from "@/components/allBrands/AllBrands";
import About from "../../components/about/About";
import Cars from "../../components/cars/Cars";
import CopyRight from "../../components/copyRight/CopyRight";
import Hero from "../../components/hero/Hero";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "@/components/footer/Footer";
import Search from "@/components/search/Search";
import FaqSection from "@/components/faq/FaqSection";


export default function Home() {
  return (
    <main className="max-w[1920px] bg-white mx-auto relative overflow-hidden">
      <Hero />
      <AllBrands />
      <Search />
      <Cars />
      <About />
      <Testimonial />
      <FaqSection/>
      <Footer/>
      <CopyRight/>
    </main>
  )
}
