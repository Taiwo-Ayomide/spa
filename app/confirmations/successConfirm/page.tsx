import Image from "next/image";
import Link from "next/link";


export default function success() {
    return(
        <aside className="ms-6 me-6">
            <section  className="flex justify-center items-center" data-aos="fade-down" data-aos-duration="3000">
                <div className="w-96 h-64 bg-green-500 rounded-lg mt-24 xl:mt-24 lg:mt-24 text-center mt-10 md:mt-12">
                    <div>
                        <h1 className="text-2xl font-sans text-white pt-12">Congratulations, your account has been successfully created.</h1>
                    </div>
                    <div  className="mt-6">
                        <Link href="/">
                            <button className="bg-white rounded-full w-44 h-12 font-bold ps-3 pe-3 text-green-500">Go to Homepage...</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section  className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="3000">
                <div className="w-96 h-64 bg-gray-200 rounded-lg text-center flex justify-center items-center">
                    <Image
                        src={'/success-35.png'}
                        alt="sucess"
                        width={100}
                        height={100}
                    />
                </div>
            </section>
        </aside>
    )
}