import Image from 'next/image';
import TypewriterDemi from '@/components/TypewriterDemi';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-black min-h-screen p-8 noto">
      <div className="flex mt-20 ml-20">
        <div className="mr-10 ml-20 w-7/12">
          <h1 className="text-6xl font-bold mb-4">
            <TypewriterDemi />
          </h1>
          <p className="text-xl text-slate-200 w-8/12 mt-8">
            Hi, I&apos;m <span className="text-violet-400">Demi</span>. I like to space out and think about random things. Sometimes those thoughts turn into ideas turn into writing: a page in my diary, a speech, or even a web application. Welcome to my space online, where everything in my brain comes together.
            <br /><br />
            <Link href="/about" className="text-lg mr-5 text-violet-200 italic transition duration-200 hover:text-violet-300">More About Me</Link>
            <Link href="/resume" className="text-lg text-violet-200 italic transition duration-200 hover:text-violet-300">Resume</Link>
          </p>
        </div>
        <div className="w-80 h-80 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={450}
            height={450}
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="mt-12 ml-20 w-10/12">
        <div className="mt-12 ml-20">
          <h2 className="text-4xl font-bold text-slate-400 mb-4">
            <Link href="/thoughts" className="transition duration-300 hover:text-slate-500">Messy Thoughts</Link>
          </h2>
          <p className="text-xl text-slate-200">
            Basically a blog. What&apos;s <span className="text-violet-300">on my mind</span> lately (usually a lot).
          </p>
          {/* Add your blog post previews or links here */}
        </div>
        <div className="mt-12 ml-20">
          <h2 className="text-4xl font-bold text-slate-400 mb-4">
            <Link href="/projects" className="transition duration-300 hover:text-slate-500">Projects</Link>
          </h2>
          <p className="text-xl text-slate-200">
            Here are some of the apps and projects I&apos;ve worked on. Check them out to see what I've been building.
          </p>
          {/* Add your project previews or links here */}
        </div>
      </div>
    </div>
  );
}

