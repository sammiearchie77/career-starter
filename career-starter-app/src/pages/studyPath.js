import Card from "../components/Card"
import SearchComponent from "../components/SearchComponent"
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import { StudyPaths, MAX_WIDTH } from "../utils/consts";

export default function StudyPath() {

    return (
        <>
            <Navbar />
            <MaxWidthWrapper val={MAX_WIDTH}>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div className="md:grid grid-cols-2 gap-10 mt-10">
                            <div>
                                <Card
                                    cardTitle="Find your Career Study path"
                                >
                                    <span className='font-bold text-md'>Study Path to your Career</span>
                                </Card>
                            </div>
                            <div>
                                <form>
                                    <SearchComponent />
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-10 py-20">
                            {
                                StudyPaths.map(study => {
                                    return (
                                        <Card key={study.id}
                                            cardTitle={study.title}
                                        >
                                            <p>Pick a language of your choice: <br /> {study.learning_phrase.first_month}</p>
                                            <p>Places to learn from:</p>
                                            <ul>
                                                <li>{study.places.codeacademy}</li>
                                                <li>{study.places.freecodecamp}</li>
                                                <li>{study.places.geeekforgeeks}</li>
                                            </ul>
                                            <p>Choose any language of your choice: <br />{study.techStack.join(", ")}</p>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}