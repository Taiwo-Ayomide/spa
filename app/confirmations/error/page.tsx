// import Image from "next/image";
// import Link from "next/link";


// export default function error() {
//     return(
//         <aside className="ms-6 me-6">
//             <section  className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
//                 <div className="w-96 h-64 bg-red-700 rounded-lg mt-24 xl:mt-24 lg:mt-24 text-center mt-10 md:mt-12">
//                     <div>
//                         <h1 className="text-2xl font-sans text-white pt-12">Your account is not successfully created. Please return home</h1>
//                     </div>
//                     <div  className="mt-6">
//                         <Link href="/about/signup">
//                             <button className="bg-white rounded-full w-44 h-12 font-bold ps-3 pe-3 text-red-700">Sign Up</button>
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//             <section  className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="3000">
//                 <div className="w-96 h-64 bg-gray-200 rounded-lg text-center flex justify-center items-center">
//                     <Image
//                         src={'/error.png'}
//                         alt="error"
//                         width={100}
//                         height={100}
//                     />
//                 </div>
//             </section>
//         </aside>
//     )
// }
import Image from 'next/image';
import Link from 'next/link';


export default function emailconfirm() {
    return(
        <>
            <main className="me-6 ms-6 mt-24 xl:ms-64 lg:ms-64 xl:me-64 lg:me-64">
                <div className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                    <Image
                        src={'/error.png'}
                        alt="error"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='text-center mt-10'>
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <h1 className='text-6xl text-gray-500 font-sans'>MESSAGE NOT SENT</h1>
                    </div>
                    <div className='mt-10' data-aos="fade-up" data-aos-duration="3000">
                        <p className='text-2xl text-gray-500 font-sans'>Your message was not sent, please check you internet connection and try again.</p>
                        <p className='text-2xl text-gray-500 mt-10 font-sans'><Link className='text-blue-700' href="/">Click here</Link> to go back to the home page.</p>
                    </div>
                </div>
            </main>
        </>
    )
}