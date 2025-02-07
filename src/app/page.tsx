import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./homepage/Hero";
import Shop2 from "./homepage/Shop2";
import Shop3 from "./homepage/Shop3";
import Asgaard from "./homepage/Asgaard";
import OurBlogs from "./homepage/OurBlogs";
import Ourinsta from "./homepage/Ourinsta";
import Footer from "./homepage/Footer";
import HomePage from "./homepage/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
        <HomePage/>
    </main>  
  );
}
