import MainApp from "@/app/ui/main";

export default async function Page() {
  

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl font-bold`}>
        STUDENT DASHBOARD
      </h1>
      <div className="xl:flex lg:flex justify-end hidden">
        {/* <p>Welcome back, ${firstname}</p> */}
        <p className="text-sm">Welcome back</p>
      </div>
      <div>
        <MainApp />
      </div>
    </main>
  );
}