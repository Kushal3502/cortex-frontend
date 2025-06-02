import GetStartedButton from "@/components/GetStartedButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="h-full flex flex-1 flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="max-w-7xl w-full  bg-[url('/grid.svg')]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-amber-900">Think</span> Better.
            <br />
            <span className="text-amber-900">Remember</span> Everything.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            <span className="text-amber-900 font-semibold">Cortex</span> is your
            second brain — a smart, connected workspace to capture ideas,
            organize knowledge, and retrieve anything instantly.
          </p>
          <GetStartedButton />
        </div>
      </main>
    </div>
  );
}
