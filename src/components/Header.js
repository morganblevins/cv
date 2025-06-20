// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4 flex justify-between items-center border-b">
      <Link href="/" className="text-2xl font-bold text-black hover:opacity-70">
        Morgan Blevins
      </Link>
      <div className="flex gap-8">
        <Link href="/about" className="text-black hover:opacity-70">
          About
        </Link>
        <Link href="/publications" className="text-black hover:opacity-70">
          Publications
        </Link>
        <Link href="/teaching" className="text-black hover:opacity-70">
          Teaching
        </Link>
        {/* <Link href="#research" className="text-black hover:opacity-70">
          Research
        </Link> */}
        <Link href="/resources" className="text-black hover:opacity-70">
          Resources
        </Link>
      </div>
    </nav>
  );
}
