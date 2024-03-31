import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <main>
                

            <footer className='bg-black w-full  h-auto '>
                    <fieldset className='block xl:flex lg:flex md:flex'>
                        <section className='xl:ms-24 lg:ms-24 ms-10 pt-12 block xl:flex lg:flex' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <Image
                            alt='Sexual Purity Academy Logo'
                            src='/download (10).jpg'
                            width={80}
                            height={80}
                            />
                        </div>
                        <div className='ms-0 xl:ms-8 lg:ms-8 pt-2 xl:pt-4 lg:pt-4'>
                            <h1 className='text-red-600 font-bold text-2xl'>SEXUAL PURITY ACADEMY</h1>
                            <p className='text-white italic'>...The home of Love, vision and purity</p>
                        </div>
                        </section>
                        <section className='xl:ms-24 lg:ms-24 ms-10 pt-12 xl:pt-16 lg:pt-16' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h1 className='text-red-600 font-bold text-2xl'>USEFUL NAVIGATIONS</h1>
                        </div>
                        <ul>
                            <li className='text-white'><Link href="/">Home</Link></li>
                            <li className='text-white'><Link href="/about">About</Link></li>
                            <li className='text-white'><Link href="/about/work">Work</Link></li>
                            <li className='text-white'><Link href="/about/application">Application</Link></li>
                            <li className='text-white'><Link href="/about/signup/login">Login</Link></li>
                            <li className='text-white'><Link href="/about/contact">Contact us</Link></li>
                        </ul>
                        </section>
                    </fieldset>
                    <aside className='xl:ms-24 lg:ms-24 ms-10 pt-12 pb-12' data-aos="fade-up" data-aos-duration="3000">
                        <div>
                        <h1 className='text-red-600 font-bold text-2xl'>CONTACT US</h1>
                        </div>
                        <ul>
                        <li className='text-white'><Link href="mailto:talk2pvo@gmail.com">talk2pvo@gmail.com</Link></li>
                        <li className='text-white'><Link href="#">Sexual Purity Academy</Link></li>
                        <li className='text-white'><Link href="#">Victor Olukoju PVO</Link></li>
                        </ul>
                    </aside>
                    <figure className='xl:ms-24 lg:ms-24 ms-10 pb-6'>
                        <h1 className='text-white text-xl'>DESIGNED BY <Link className='underline' href="/">SPA ICT</Link></h1>
                    </figure>
                </footer>
            </main>
        </>
    )
}