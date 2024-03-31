import Image from "next/image";


export default function payment() {
    return(
        <>
            <main>
                <section  className="flex justify-center items-center mt-24" data-aos="zoom-in" data-aos-duration="3000">
                    <div className="w-96 h-64 bg-gray-200 rounded-lg text-center justify-center items-center">
                        <div className="flex justify-center items-center pt-6">
                            <Image
                                src={'/success-35.png'}
                                alt="sucess"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div  className="text-center">
                            <div>
                                <h1 className="text-4xl font-sans text-green-700 pt-12">Payment Successful!</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}