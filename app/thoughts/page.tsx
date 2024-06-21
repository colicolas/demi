import { getSortedArticlesData } from '../../lib/markdown';
import Link from 'next/link';

const categoryColors: { [key: string]: string } = {
  politics: 'text-red-500',
  emotions: 'text-pink-500',
  personal: 'text-yellow-500',
  society: 'text-green-500',
  philosophy: 'text-blue-500',
  hobbies: 'text-indigo-500',
  theFuture: 'text-purple-500',
  literature: 'text-gray-500',
};

export default async function ThoughtsPage() {
  const articles = getSortedArticlesData();

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="mt-20 ml-20">
        <h1 className="text-6xl font-bold mb-4 ml-20 text-slate-300">Messy Thoughts</h1>
        <p className="text-xl text-slate-200 mt-8 ml-20 ">right now im <span className="text-amber-300">hungry </span></p>
      </div>
      <div className="mt-12 ml-20">
        {articles.map(({ id, date, title, description, category }) => (
          <div key={id} className="mb-8 ml-20">
            <Link href={`/thoughts/${id}`} className="text-2xl transition duration-300 font-bold text-indigo-300 hover:text-indigo-400" >{title}
            </Link>
            <p className="text-slate-400">{date} | <span className={`${categoryColors[category]}`}>{category}</span></p>
            <p className="text-slate-200">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
