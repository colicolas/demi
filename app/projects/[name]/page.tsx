import { getProjectData, getProjectJournalLinks } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  params: { name: string };
}

export default async function ProjectPage({ params }: ProjectProps) {
  const projectData = await getProjectData(params.name);
  const journalLinks = getProjectJournalLinks(params.name);

  return (
    <div className="bg-zinc-900 text-white items-center justify-items-center min-h-screen p-8">
      {/* Project Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={projectData.image}
          alt={projectData.title}
          width={1100} // Specify the width of the image
          height={400} // Specify the height of the image
          className="shadow-lg"
          priority // Ensures the image is loaded early for performance
        />
      </div>

      {/* Project Content */}
      <div className="markdown-content-dark mt-20 w-5/12" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

      {/* Project Journal */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Project Journal</h2>
        <ul className="space-y-2">
          {journalLinks.map((journal) => (
            <li key={journal.id}>
              <Link href={`/projects/${params.name}/${journal.id}`} className="text-blue-400 hover:underline">
                {journal.date} - {journal.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
