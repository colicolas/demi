import Link from 'next/link';
import { getSortedArticlesData } from '../../lib/markdown';
import Filter from '@/components/Filter';

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

interface Article {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

export default async function ThoughtsPage({ searchParams }: { searchParams: { category?: string } }) {
  const articles = getSortedArticlesData();
  const filteredCategory = searchParams.category || null;
  const filteredArticles = filteredCategory
    ? articles.filter(article => article.category === filteredCategory)
    : articles;

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="mt-20 ml-20">
        <h1 className="text-6xl ml-20 font-bold mb-4 text-slate-200">Messy Thoughts</h1>
        <p className="text-xl text-slate-200 mt-8 ml-20 ">right now im <span className="text-lime-300">hungry </span></p>
      </div>
      <div className="mt-12 ml-20 mb-4">
        <Filter categoryColors={categoryColors} />
      </div>
      <div className="ml-20">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(({ id, date, title, description, category }) => (
            <Link key={id} href={`/thoughts/${id}`} className="block mb-8 ml-20 p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-300 w-9/12">
                <span className="text-2xl font-bold text-indigo-300 duration-300 transition hover:text-indigo-400">{title}</span>
                <p className="text-slate-200 mt-2">{description}</p>
                <p className="text-slate-400 text-lg mt-1">{date} | <span className={`${categoryColors[category]}`}>{category}</span></p>
            </Link>
          ))
        ) : (
          <p className="text-slate-200 ml-20">None yet :) check back later!</p>
        )}
        
        <div className="mt-12">
          <Link href="/" className="text-indigo-300 hover:underline ml-20">← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

/*import { getSortedArticlesData } from '../../lib/markdown';
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
}*/
