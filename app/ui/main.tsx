

export default function MainApp() {


    return(
        <>
            <main>
                <section className="block xl:flex lg:flex md:flex mt-10">
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Admission Letter</h1>
                            <a href="/pdf/SEXUAL PURITY ACADEMY ADMISSION LETTER.pdf" download>
                                <input type="button" value="Download" title="Click to download your admission" className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                            </a>
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Acceptance Fee</h1>
                            <input type="button" value="Click to pay" className="bg-yellow-600 hover:bg-yellow-800 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Student Status</h1>
                            <input type="button" value="100L" disabled className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                        </div>
                    </div>
                </section>
                <section className="block xl:flex lg:flex md:flex mt-10">
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Tuition Fee (Full)</h1>
                            <input type="button" value="Click to pay now" className="bg-yellow-600 hover:bg-yellow-800 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Tuition Fee (Part)</h1>
                            <input type="button" value="Click to pay now" className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Download</h1>
                            <a href="/pdf/SEXUAL PURITY ACADEMY DRESS CODE.pdf" download title="Download your Student Dress Code">
                                <input type="button" value="Student Dress Code" className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-40 h-12 border-solid rounded-lg cursor-pointer mt-2" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="block xl:flex lg:flex md:flex mt-10">
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">BIODATA</h1>
                            <a href="/pdf/SEXUAL PURITY ACADEMY BIODATA FORM.pdf" download title="Download your Student Dress Code">
                                <input type="button" value="BioData Form" className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-auto h-12 border-solid rounded-lg cursor-pointer mt-2" />
                            </a>
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Download</h1>
                            <a href="/pdf/SEXUAL PURITY ACADEMY STUDENT OATH.pdf" title="Download your Student Oath of Allegiance" download>
                                <input type="button" value="Student Oath" className="bg-yellow-600 hover:bg-yellow-800 font-sans text-white ms-6 me-6 w-auto h-12 border-solid rounded-lg cursor-pointer mt-2" />
                            </a>
                        </div>
                    </div>
                    <div className="xl:w-64 lg:w-64 w-full h-32 bg-gray-100 border {} border-solid rounded-lg border-blue-700 xl:ms-10 lg:ms-10 mt-5">
                        <div className="mt-4">
                            <h1 className="uppercase font-sans text-blue-700 ms-6 text-sm">Student Materials</h1>
                            <input type="button" value="Click here to pay" className="bg-green-700 hover:bg-green-500 font-sans text-white ms-6 me-6 w-auto h-12 border-solid rounded-lg cursor-pointer mt-2" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}