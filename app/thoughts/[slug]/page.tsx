import { getArticleData, getSortedArticlesData } from '@/lib/markdown';
import Link from 'next/link';

interface ArticleProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const articleData = await getArticleData(params.slug);

  return (
    <div className="noto bg-white flex flex-col items-center min-h-screen p-8">
      <div className="mt-20 flex flex-col items-center">
        <p className="text-slate-600 text-lg">{articleData.date} | Demi Zheng</p>
        <h1 className="text-4xl font-bold text-slate-800 text-center">{articleData.title}</h1>
        <p className="text-slate-500 text-md mt-3">{articleData.description}</p>
        <div className="mt-8 text-xl markdown-content w-7/12" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </div>
      <div className="mt-12">
        <Link href="/thoughts" className="text-blue-500 hover:underline">← Back to thoughts
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
