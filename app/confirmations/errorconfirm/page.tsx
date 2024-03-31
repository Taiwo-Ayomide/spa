import Image from "next/image";
import Link from "next/link";

export default function success() {
  return (
    <aside className="ms-6 me-6">
      <section
        className="flex justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <div className="w-96 h-64 bg-red-700 rounded-lg xl:mt-22 lg:mt-22 text-center mt-10 md:mt-12">
          <div>
            <h1 className="text-2xl font-sans text-white pt-12">
              Your account is not successfully created. Please return home.
              Perherps the email you use has been registered before.
            </h1>
          </div>
          <div className="mt-6">
            <Link href="/about/signup">
              <button className="bg-white rounded-full w-44 h-12 font-bold ps-3 pe-3 text-red-700">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="w-96 h-64 bg-gray-200 rounded-lg text-center flex justify-center items-center">
          <Image src={"/error.png"} alt="error" width={100} height={100} />
        </div>
      </section>
    </aside>
  );
}
