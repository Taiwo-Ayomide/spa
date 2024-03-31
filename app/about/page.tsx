'use client';
import Image from "next/image";
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer';

export default function about() {


    return(
        <>
            <Navbar />
            <header>
                <div>
                    <Image 
                        src={'/images/wspdnew.jpg'}
                        alt="header_photo"
                        width={'1500'}
                        height={'500'}
                    />
                    <div className="about_us text-5xl font-bold font-sans">ABOUT US</div>
                </div>
            </header>
            <section className="section">
                <div>
                    <h1 className="text-gray-700 font-semibold text-4xl">About us</h1>
                    <p className="text-gray-700 text-xl py-2">The home of Love, Vision, and Purity. We recognize our frailty <br/> but we lean on the divinity of Christ.</p>
                </div>
            </section>
            <section className="mt-14 xl:ms-32 lg:ms-32 ms-10">
                <div className="widthset">
                    <p className="uppercase text-yellow-400 font-bold font-sans">100k subscribers reached</p>
                </div>
                <div className="mt-3 widthset">
                    <h1 className="text-2xl font-bold">Victor Olukoju PVO Youtube Channel goes viral</h1>
                </div>
                <div className="mt-3">
                    <p className="story">Victor Olukoju PVO Youtube Channel which belongs to the provost and the founder of Sexual Purity Academy, the person of Pastor Victor Olukoju has reported to reach 100K youtube subscribers. The journey to 100K subscribers started years ago and we give all glories to God for making this a reality. The achivement was first celebrated and appreciated by the well known company YOUTUBE. The company congratulated and appreciated the owner for the great effort he has put to place to make 100K possible. Youtube sent a Youtube Silver Play Button which was unboxed by the provost in a video on his Youtube Channel. He concluded in a video that the journey to 200K has started. He hereby huges the audience to support the Channel to reach the new milestone set before us. If you have not subscribe to Victor Olukoju Youtube channel, Please subscribe today.</p>
                </div>
            </section>
            <fieldset className="xl:flex lg:flex md:block sm:block block xl:ms-10 lg:ms-14 me-4 ms-4">
                <div className="xl:w-96 lg:w-96 xl:h-96 lg:h-96 w-full h-96 mt-5 bg-gray-200 hover:bg-gray-100 rounded-lg" data-aos="fade-up" data-aos-duration="3000">
                    <div className="ms-10 pt-32">
                        <h1 className="font-bold text-xl font-sans text-black ">MISSION</h1>
                    </div>
                    <div className="ms-10 pt-5">
                        <p className="text-xl font-sans text-black ">Our Mission is to teach Sexual Purity among the teenagers.</p>
                    </div>
                </div>
                <div className="xl:w-96 lg:w-96 xl:h-96 lg:h-96 w-full h-96 bg-gray-200 mt-5 hover:bg-gray-100 xl:ms-10 lg:ms-10 rounded-lg" data-aos="fade-up" data-aos-duration="3000">
                    <div className="ms-10 pt-32">
                        <h1 className="font-bold text-xl font-sans text-black ">VISION</h1>
                    </div>
                    <div className="ms-10 pt-5">
                        <p className="text-xl font-sans text-black ">We have the vision to build Sexual Purity Advocate for Christ.</p>
                    </div>
                </div>
                <div className="xl:w-96 lg:w-96 xl:h-96 lg:h-96 w-full h-96 bg-gray-200 mt-5 hover:bg-gray-100 xl:ms-10 lg:ms-10 rounded-lg" data-aos="fade-up" data-aos-duration="3000">
                    <div className="ms-10 pt-32">
                        <h1 className="font-bold text-xl font-sans text-black ">HISTORY</h1>
                    </div>
                    <div className="ms-10 pt-5">
                        <p className="text-xl font-sans text-black me-10 text-justify leading-none">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </fieldset>
            <section className="w-full h-auto pt-24 pb-24 bg-gray-700 mt-10 ps-10 pe-10">
                <div className="text-center" data-aos="flip-up" data-aos-duration="3000">
                    <h1 className="text-white text-4xl font-mono">TESTIMONIAL</h1>
                    <p className="text-gray-300">Our student Testimonies about the academy</p>
                </div>
                <div className="flex justify-center mt-14" data-aos="zoom-in">
                    <Image
                        src={'/images/e-pass.png'}
                        width={50}
                        height={50}
                        alt="Student_Testimony"
                    />
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="text-gray-300 text-2xl font-mono">LOREM IDITSU</h1>
                </div>
                <aside className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="3000">
                    <div className="w-96 h-auto bg-black mt-10 text-center pt-5 pb-5 ps-5 pe-5">
                        <div>
                            <h1 className="text-white">ADDICTION DELIVERED</h1>
                        </div>
                        <div className="text-white">
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quidem itaque officia ratione odit dolorem repellendus dolores suscipit exercitationem, iste laborum laudantium quia voluptatibus molestiae esse consequatur id dolorum est!</h1>
                        </div>
                    </div>
                </aside>
            </section>
            <Footer />
        </>
    )
}