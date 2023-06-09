import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Features from "../components/Features"
import About from "../components/About"
import Sponsors from "../components/Sponsors"
import feature_one from "../img/hero.jpg"
import feature_two from "../img/R.png"
import feature_three from "../img/feature_three.jpg"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import { MAX_WIDTH } from "../utils/consts"


export default function Home() {
    return (
        <div className="bg-white">
            <Navbar />
            <MaxWidthWrapper val={MAX_WIDTH}>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden banner sm:-top-0"
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
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Launch your career with Career Starter.{' '}
                                <Link to="/pages/resources" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Start your career with confidence.
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                Discover your career path and get started on the path to your dream career with Career Starter
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/pages/study-path"
                                    className="rounded-md ring-2 ring-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-indigo-500 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Find path
                                </Link>
                                <Link to="/pages/about" className="text-lg font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
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
                <Features
                    header={"A platform for you to search for any career of your choice!."}
                    subHeader="Find your career"
                    image={feature_one}
                />
                <About
                    firstTitle="Ready to get started? Find your career path"
                    secondTitle={"About Your Career"}
                    image={feature_two}
                />
                <Features
                    header={"Find your career resources and get started in your future journey!."}
                    subHeader="Find your career"
                    image={feature_three}
                />
                <Sponsors />
                <CallToAction
                    header="A platform that guides and build future professionals"
                    text="...better yourself, know your profession"
                    buttonText="Sign Up"
                />
                <Footer />
            </MaxWidthWrapper>
        </div>
    )
}