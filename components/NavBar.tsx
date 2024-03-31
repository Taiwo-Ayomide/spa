import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return(
        <>
            <main>
                <div className="w-full h-10 bg-red-700">
                    {/* <h1 className="font-bold text-white ms-12 pt-2 text-sm">OFFICIAL WEBSITE FOR SEXUAL PURITY ACADEMY...</h1> */}
                </div>
                {/* <!-- Navbar begins --> */}
                <div className="page-wrapper">
                    <div className="nav-wrapper">
                        <div className="grad-bar"></div>
                            <nav className="navbar">
                                <Image className="logo" src="/download (10).jpg" width={'100'} height={'100'} alt="Company Logo" />
                                <div className="menu-toggle" id="mobile-menu">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                <ul className="nav no-search">
                                    <li className="nav-item"><Link href="/">Home</Link></li>
                                    <li className="nav-item"><Link href="/about">About us</Link></li>
                                    <li className="nav-item"><Link href="/about/work">Programs</Link></li>
                                    <li className="nav-item"><Link href="/about/application">Admission</Link></li>
                                    <li className="nav-item"><Link href="/about/signup/login">Login</Link></li>
                                    <li className="nav-item"><Link href="/about/contact">Contact Us</Link></li>
                                    <i className="fas fa-search" id="search-icon"></i>
                                    <input className="search-input" type="text" placeholder="Search.." />
                                </ul>
                            </nav>
                        </div>
                </div>
            </main>
        </>
    )
}