import { getJournalData } from '@/lib/projects';

interface JournalProps {
  params: { name: string; date: string };
}

export default async function JournalPage({ params }: JournalProps) {
  const journalData = await getJournalData(params.name, params.date);

  return (
    <div className="bg-white text-zinc-800 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{journalData.title}</h1>
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: journalData.contentHtml }} />
    </div>
  );
}
