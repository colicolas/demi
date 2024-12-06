import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="mb-20 w-full flex justify-between items-center px-8">
      <div>
        <Link className="ml-32 text-2xl hover:opacity-70 duration-300" href="/projects">
          &lt; Back To Projects
        </Link>
      </div>

      {/* Right-aligned links */}
      <div className="flex space-x-6 mr-32 text-lg text-zinc-300">
        <Link className="hover:opacity-70 duration-300" href="/">
          Home
        </Link>
        <Link className="hover:opacity-70 duration-300" href="/resume">
          Resume
        </Link>
        <Link className="hover:opacity-70 duration-300" href="/thoughts">
          Blog
        </Link>
      </div>
    </div>
  );
}
