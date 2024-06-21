import { getArticleData } from '../../../lib/markdown';
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
}
