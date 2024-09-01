import { getArticleData, getSortedArticlesData } from '@/lib/markdown';
import Link from 'next/link';

interface ArticleProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const articleData = await getArticleData(params.slug);

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="mt-20 ml-20">
        <h1 className="text-6xl font-bold mb-4 text-slate-200 ml-20">{articleData.title}</h1>
        <p className="text-slate-400 text-lg ml-20">{articleData.date} | Demi Zheng</p>
        <p className="text-slate-400 text-md mt-8 ml-20">{articleData.description}</p>
        <div className="text-slate-200 mt-8 text-xl markdown-content w-10/12 ml-20" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </div>
      <div className="mt-12 ml-20">
        <Link href="/thoughts" className="text-indigo-300 hover:underline ml-20">← Back to thoughts
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map(article => ({
    slug: article.id,
  }));
}
/*import { getArticleData } from '../../../lib/markdown';
import Link from 'next/link';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articleData = await getArticleData(params.slug);

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="mt-20 ml-20">
        <h1 className="text-6xl ml-20 font-bold mb-4 text-white">{articleData.title}</h1>
        <p className="text-slate-400 ml-20 ">{articleData.date} | Demi Zheng</p>
        <p className="text-slate-200 mt-8 ml-20">{articleData.description}</p>
        <div className="text-slate-200 mt-8 ml-20" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </div>
      <div className="mt-12 ml-20">
        <Link href="/thoughts" className="text-indigo-300 ml-20 hover:underline">← Back to thoughts
        </Link>
      </div>
    </div>
  );
}*/
