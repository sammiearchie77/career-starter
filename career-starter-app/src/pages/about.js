import About from "../components/About";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar"
import { MAX_WIDTH } from "../utils/consts";
import image from "../img/OIP.jpeg"
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import image_one from "../img/smart.jpeg"
import image_two from "../img/african-american.jpg"


export default function AboutPage(){

  return (
    <>
      <Navbar />
      <MaxWidthWrapper val={MAX_WIDTH}>
        <div className="relative isolate px-6 py-20 font-bold lg:px-8">
          <h1 className="text-5xl text-indigo-500 text-center">About Us</h1>
            <About
              header="Career Starter"
              subHeader="Career Path"
              image={image_one}
            />
            <Features
              header="Our Agenda"
              subHeader={"we are here"}
              image={image}
              />
            <About
              header="The learning path"
              subHeader="Learning path"
              image={image_two}
            />
          </div>
          <Sponsors />
          <Footer />
      </MaxWidthWrapper>
    </>
  );
}