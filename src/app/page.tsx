import GetStartedButton from "@/components/GetStartedButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="h-full pt-16 flex flex-col justify-center items-center">
        <h1 className=" text-3xl font-bold">Landing Page</h1>
        <GetStartedButton/>
      </div>
    </div>
  );
}
