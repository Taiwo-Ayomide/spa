import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";
import Image from "next/image";
{/* <link rel="icon" href="/download (10).jpg" sizes="any" /> */}


export default function program() {
    return(
        <>
            <main>
                <Navbar />
                <fieldset className="mb-32" >
                    <section data-aos="fade-left" data-aos-duration="3000">
                        <div className="h-96 w-1 bg-blue-700 mt-10 ms-10 xl:ms-24 lg:ms-24"></div>
                        {/* <div className="h-1 w-full xl:w-96 lg:w-96 bg-blue-700 mt-10  xl:ms-10 lg:ms-10" id="intersect"></div> */}
                    </section>
                    <fieldset className="block xl:flex lg:flex">
                        <section id="program_text" className="ms-12 xl:ms-32 lg:ms-32 mb-32" data-aos="fade-left" data-aos-duration="3000">
                            <div>
                                <h1 className="text-xl font-bold text-blue-700 w-96">SONDA DAY</h1>
                                <p className="text-sm w-52">This is a yearly program of the academy. The program happens on 10th of April, <br/>2023. It is a gathering of the Sons and Daughter of God.</p>
                                <article className="font-bold mt-8 text-blue-700">MINISTERING</article>
                                <p>Pastor Victor Olukoju</p>
                                <p>Damilola Mike-Bamiloye</p>
                                <p>Joshua Mike-Bamiloye</p>
                                <p>Franca Olukoju</p>
                            </div>
                        </section>
                        <section data-aos="flip-left" data-aos-duration="3000">
                            <Image
                                src={'/images/sonda.jpg'}
                                alt="sonda"
                                width={550}
                                height={350}
                                layout="intrinsic"
                                className="w-full"
                            />
                        </section>
                    </fieldset>
                </fieldset>
                <fieldset className="mb-32">
                    <section data-aos="fade-right" data-aos-duration="3000">
                        <div className="h-96 w-1 bg-blue-700 mt-10 ms-10 xl:ms-24 lg:ms-24"></div>
                        {/* <div className="h-1 w-full xl:w-96 lg:w-96 bg-blue-700 mt-10 xl:ms-10 lg:ms-10" id="intersect"></div> */}
                    </section>
                    <fieldset className="block xl:flex lg:flex">
                        <section id="program_text" className="ms-12 xl:ms-32 lg:ms-32" data-aos="fade-right" data-aos-duration="3000">
                            <div>
                                <h1 className="text-xl font-bold text-blue-700 w-96">WORLD PURITY DAY</h1>
                                <p className="text-sm w-52">This is a yearly program of the academy. WSPD always took place every 14th, <br/>November, Every year. The program also mark the provost birthday celebration.</p>
                                <article className="font-bold mt-8 text-blue-700">MINISTERING</article>
                                <p>Pastor Victor Olukoju</p>
                                <p>Franca Olukoju</p>
                                <p>All Sexual Purity Ambassador</p>
                                <p>Everybody</p>
                            </div>
                        </section>
                        <section data-aos="flip-left" data-aos-duration="3000">
                            <Image
                                src={'/images/sonda.jpg'}
                                alt="sonda"
                                width={550}
                                height={350}
                                layout="intrinsic"
                            />
                        </section>
                    </fieldset>
                </fieldset>
                <fieldset className="mb-32">
                    <section data-aos="fade-up" data-aos-duration="3000">
                        <div className="h-96 w-1 bg-blue-700 mt-10 ms-10 xl:ms-24 lg:ms-24"></div>
                        {/* <div className="h-1 w-full xl:w-96 lg:w-96 bg-blue-700 mt-10 xl:ms-10 lg:ms-10" id="intersect"></div> */}
                    </section>
                    <fieldset className="block xl:flex lg:flex">
                        <section id="program_text" className="ms-12 xl:ms-32 lg:ms-32" data-aos="fade-up" data-aos-duration="3000">
                            <div>
                                <h1 className="text-xl font-bold text-blue-700 w-96">PARABLES MOVIES SHOOT</h1>
                                <p className="text-sm w-52">This is a yearly program of the academy. WSPD always took place every 14th, <br/>November, Every year. The program also mark the provost birthday celebration.</p>
                                <article className="font-bold mt-8 text-blue-700">MINISTERING</article>
                                <p>Pastor Victor Olukoju</p>
                                <p>Franca Olukoju</p>
                                <p>All Sexual Purity Ambassador</p>
                                <p>Everybody</p>
                            </div>
                        </section>
                        <section data-aos="flip-left" data-aos-duration="3000">
                            <Image
                                src={'/images/sonda.jpg'}
                                alt="sonda"
                                width={550}
                                height={350}
                                layout="intrinsic"
                            />
                        </section>
                    </fieldset>
                </fieldset>
                <Footer />
            </main>
        </>
    )
}