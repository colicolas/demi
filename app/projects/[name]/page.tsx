import { getProjectData, getProjectJournalLinks } from '@/lib/projects';
import Link from 'next/link';

interface ProjectProps {
  params: { name: string };
}

export default async function ProjectPage({ params }: ProjectProps) {
  const projectData = await getProjectData(params.name);
  const journalLinks = getProjectJournalLinks(params.name);

  return (
    <div className="bg-white text-zinc-800 min-h-screen p-8 noto">
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Project Journal</h2>
        <ul className="space-y-2">
          {journalLinks.map((journal) => (
            <li key={journal.id}>
              <Link href={`/projects/${params.name}/${journal.id}`} className="text-blue-500 hover:underline">
                {journal.date} - {journal.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
