import Link from 'next/link';
import { getSortedArticlesData } from '../../lib/markdown';
import Filter from '@/components/Filter';
import BlogCard from '@/components/BlogCard';
import TopBar from '@/components/TopBar';

const categoryColors: { [key: string]: string } = {
  politics: 'text-red-500',
  emotions: 'text-pink-500',
  personal: 'text-yellow-500',
  society: 'text-green-500',
  philosophy: 'text-blue-500',
  hobbies: 'text-indigo-500',
  theFuture: 'text-purple-500',
  literature: 'text-gray-500',
  school: 'text-fuchsia-500',
};

interface Article {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
}


function calculateReadingTime(content: string) {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.split(/\s+/).length; // Split by whitespace to count words
  const minutes = Math.ceil(words / wordsPerMinute); // Round up to nearest minute
  return minutes;
}

export default async function ThoughtsPage({ searchParams }: { searchParams: { category?: string } }) {
  const articles = getSortedArticlesData();

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col noto items-center">
      <TopBar />
      <div className="mt-20 items-center">
        <h1 className="text-5xl font-bold text-center mb-4 text-slate-700">Beyond Civility</h1>
        <p className="text-xl text-center mb-4 text-slate-400"> the game is to guess what i was supposed to be doing </p>
      </div>

      <div className="mt-10 w-3/5">
        {articles.length > 0 ? (
          articles.map(({ id, date, title, description, category, content }) => {
            const readingTime = calculateReadingTime(content);
            return (
              <BlogCard
                key={id}
                id={id}
                date={date}
                title={title}
                category={category}
                readingTime={`${readingTime} min read`}
                categoryColor={categoryColors[category]}
              />
            );
          })
        ) : (
          <p className="text-slate-200 ml-20">None yet :) check back later!</p>
        )}
      </div>
    </div>
  );
}
