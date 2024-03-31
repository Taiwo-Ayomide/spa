import Image from 'next/image';
import Link from 'next/link';


export default function emailconfirm() {
    return(
        <>
            <main className="me-6 ms-6 mt-24 xl:ms-64 lg:ms-64 xl:me-64 lg:me-64">
                <div className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                    <Image
                        src={'/email.png'}
                        alt='email'
                        width={100}
                        height={100}
                    />
                </div>
                <div className='text-center mt-10'>
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <h1 className='text-6xl text-gray-500 font-sans'>Verify your email</h1>
                    </div>
                    <div className='mt-10' data-aos="fade-up" data-aos-duration="3000">
                        <p className='text-2xl text-gray-500 font-sans'>We've sent an email to you. Please verify your email and activate your account. The link in the email will expire in 24hours.</p>
                        <p className='text-2xl text-gray-500 mt-10 font-sans'><Link className='text-blue-700' href="/about/signup">Click here</Link> if you did not receive an email or would like to change the email address you signed up with.</p>
                    </div>
                </div>
            </main>
        </>
    )
}