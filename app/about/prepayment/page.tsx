'use client';
import Link from 'next/link';


export default function pay() {
    return(
        <>
            <main>
                <div className='xl:ms-24 lg:ms-24 lg:me-24 xl:me-24 ms-6 xl:mt-24 lg:mt-24 me-6 bg-green-400 h-auto rounded-lg border-solid border-4 border-green-700 mt-12'>
                    <div className="ms-12">
                        <h1 className="text-white font-semibold text-2xl font-sans underline">IMPORTANT NOTIFICATION</h1>
                    </div>
                    <div className="ms-12 me-12 pt-4 pb-4">
                        <h1 className="text-white text-xl font-sans text-justify">To process you admission, an application fee of Three thousand Naira must be paid via Interswitch enabled debit card. And a bank charge of Three Hundred and fifty Naira.</h1>
                    </div>
                </div>
                <section className="flex justify-center items-center ms-4 me-4">
                    <div className='xl:mt-24 flex lg:mt-24 me-6 h-auto w-96 mt-12'>
                        <div className='leading-10'>
                            <h1 className='text-xl font-sans font-bold'>Payment</h1>
                            <h1 className='text-xl font-sans'>Application fee</h1>
                            <h1 className='text-xl font-sans'>Charges</h1>
                            <h1 className='text-xl font-sans'>Total</h1>
                        </div>
                        <div className='ms-40 leading-normal'>
                            <h1 className='text-xl font-sans font-bold'>Amount</h1>
                            <h1 className='text-xl font-sans'>#3,000</h1>
                            <h1 className='text-xl font-sans'>#350</h1>
                            <h1 className='text-xl font-sans'>#3,350</h1>
                        </div>
                        
                    </div>
                </section>
                <section  className="flex justify-center items-center ms-4 me-4">
                    <div className="pt-1 pb-2">
                        <Link href="https://buy.stripe.com/test_4gweYj4KR6y21Hi4gg">
                            <button className="bg-green-700 rounded-lg ps-4 h-10 pe-4 text-white hover:bg-blue-700 hover:text-white hover:font-bold">Proceed to payment</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}