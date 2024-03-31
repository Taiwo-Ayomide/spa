import Link from "next/link";


export default function application() {
    return(
        <>
            <main>
                <div className="w-full h-auto bg-red-700 text-center">
                    <h1 className="text-white font-semibold text-xl">WELCOME TO SEXUAL PURITY ACADEMY APPLICATION PORTAL</h1>
                </div>
                <div className="ms-12 mt-6 me-12 text-justify">
                    <div>
                        <p className="font-semibold italic">Dear Applicants,</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex unde natus accusamus ipsam optio inventore minima commodi saepe corporis cum. Officiis hic sunt, dolor natus illum porro quas laboriosam molestiae!
                        Libero, deleniti doloribus. Quo inventore impedit repudiandae adipisci aperiam atque itaque eos, animi dicta veniam culpa voluptate eveniet quidem delectus molestiae debitis maiores cumque neque perferendis sint sapiente repellat unde?
                        Inventore odit corporis enim explicabo, tempore quidem tenetur est dicta, suscipit sed aspernatur dolorum! Placeat expedita dicta, eum ratione, nulla cum veritatis quasi corrupti in cumque consequuntur nobis. Quisquam, similique!</h1>
                    </div>
                    <aside className="pt-6">
                        <h1 className="font-bold">After fulfilling the above criteria, please create an account <Link className="underline text-blue-700" href="/about/signup">Here</Link></h1>
                    </aside>
                </div>
            </main>
        </>
    )
}