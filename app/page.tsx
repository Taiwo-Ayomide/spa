import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer';
import Head from 'next/head';

<Head>
  <link rel="icon" href="/download (10).jpg" />
  <link rel="shortcut icon" href="/download (10).jpg" type="image/x-icon" />
</Head>


export default function page() {
  return(
    <>
        <main>
          <Navbar />
          <div>
            <video className="w-full" src="/videospeak.mp4" autoPlay muted loop>
              <div className='w-96 h-96 bg-blue-700'></div>
            </video>
          </div>
          <header className='lg:flex md:block sm:block sm:mt-24'>
            <div className='xl:ms-64 xl:mt-20 sm:ms-52'>
              <Image
                src={'/images/png-clipart-business-vision-statement-organization-company-vision-text-orange-thumbnail.png'}
                width={200}
                height={200}
                alt='vision-logo'
                className='vision-picture w-56 text-center'
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <div className='pt-3 vision-title' data-aos="fade-up" data-aos-duration="3000">
                <h1 className='font-bold text-2xl w-56 text-center'>OUR VISION</h1>
              </div>
              <div className='title-parag' data-aos="fade-down" data-aos-duration="3000">
                <h1 className='w-56 text-center text-xl'>We have the vision to build Sexual Purity Ambassadors for Christ.</h1>
              </div>
            </div>
            <div className='xl:ms-64 xl:mt-20 md:ms-52 ms:ms-52 ms-52'>
              <Image
                src={'/images/1791.png'}
                width={200}
                height={200}
                alt='vision-logo'
                className='mission-picture w-56 text-center'
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <div className='mision-title pt-3' data-aos="fade-up" data-aos-duration="3000">
                <h1 className='font-bold text-2xl w-56 text-center uppercase'>our mission</h1>
              </div>
              <div className='mission-parag' data-aos="fade-down" data-aos-duration="3000">
                <h1 className='w-56 text-center text-xl'>Our Mission is to teach Sexual Purity among the teenagers.</h1>
              </div>
            </div>
          </header>
          <section className='mt-24'>
            <div className='xl:flex lg:flex sm:block'>
              <div>
                <Image
                  src={'/images/sonda.jpg'}
                  width={470}
                  height={400}
                  layout='intrinsic'
                  alt='sonda-service picture'
                  className='sonda ms-12 lg:ms-40 xl:ms-40 md:ms-32 sm:ms-24'
                  data-aos="flip-left"
                  data-aos-duration="3000"
                />
              </div>
              <div className='contain ms-24 pt-36 sm:pt-20' data-aos="fade-up" data-aos-duration="3000">
                <h1 className='font-bold text-2xl'>SONDA DAY 2024</h1>
                <p className='w-96 text-base'>Join us in a gathering of the Sons and Daughter of God as we celebrates Sons and Daughters Day (SONDA DAY.) Happening April 14th, 2024</p>
              </div>
            </div>
            <div className='xl:flex lg:flex md:block sm:block pt-12'>
              <div>
                <Image
                  src={'/images/wspd.jpg'}
                  width={470}
                  height={400}
                  alt='sonda-service picture'
                  className='sonda ms-24 xl:ms-40 lg:ms-40 md:ms-40'
                  data-aos="flip-left"
                  data-aos-duration="3000"
                />
              </div>
              <div className='containb ms-24 xl:pt-36 lg:pt-36 sm:pt-12' data-aos="fade-up" data-aos-duration="3000">
                <h1 className='font-bold text-2xl'>WORLD SEXUAL PURITY DAY 2024</h1>
                <p className='w-96 text-base'>It's the World Sexual Purity Day. Sexual Purity Awareness is our goal. Happening November 14th, 2024</p>
              </div>
            </div>
          </section>
          <aside className='img w-full h-64 mt-6 text-center pt-24 ps-3 pe-3' data-aos="zoom-in" data-aos-duration="3000">
            <h1 className='text-white font-bold text-3xl uppercase'>you can apply for our admission here</h1>
            <p className='text-red-600 font-serif text-xl shadow-2xl'><Link href="/about/application">Click here to apply for our admission.</Link></p>
          </aside>
          <aside className='bg-blue-700 w-full h-64 text-center pt-24'>
            <div data-aos="fade-down" data-aos-duration="3000">
              <h1 className='font-semibold text-white text-2xl'>SUBSCRIBE TO OUR NEWS LETTER</h1>
            </div>
            <form action="#">
              <div data-aos="fade-up" data-aos-duration="3000">
                <input type="email" name="email" className="w-96 bg-blue-700 border-2 rounded-lg border-white border-solid text-white font-sans" placeholder='Enter your Email' />
                <input type="submit" value="submit" className="w-24 uppercase text-blue-700 hover:bg-red-500 hover:text-white font-bold ms-1 cursor-pointer bg-white" />
              </div>
            </form>
          </aside>
          <Footer />
        </main>
    </>
  )
}