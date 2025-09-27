import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import nextLogo from "@/public/next.svg";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* optimized local image */}
      <Image src={nextLogo} alt="next logo" />
      {/* optimized remote image */}
      <div className="relative h-screen">
        <Image
          src="https://bitly.cx/SUCwR"
          alt="remote image"
          // width={500}
          // height={300}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // quality={100}
          priority
        />
      </div>
    </main>
  );
}

export  const metadata: Metadata ={
  title: "Home Page",
  description: "This is the home page",
}