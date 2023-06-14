import Card from "../components/Card";
import Footer from "../components/Footer";
import FormComponent from "../components/FormComponent";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import { MAX_WIDTH } from "../utils/consts";

export default function contactPage() {

  return (
    <>
      <Navbar />
      <MaxWidthWrapper val={MAX_WIDTH}>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="md:grid grid-cols-2 gap-10">
            <FormComponent
              formTitle="Contact Us"
              firstInput="name"
              secondInput="email"
              messageInput="message"
              buttonText="submit"
            />
            <div className="md:mt-[10rem]">
              <Card
                cardTitle="Locate and reach out to us"
              >
                <p>Address: Somewhere unknown</p>
                <p>Phone: 080xxxxxxxxx</p>
                <p>Email: info@careerstarter.com</p>
              </Card>
            </div>
          </div>
        </div>
        <Sponsors />
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}