import Link from 'next/link';
import { getSortedProjectsData } from '@/lib/projects';

export default async function ProjectsPage() {
  const projects = getSortedProjectsData();

  return (
    <div className="bg-blue-50 text-zinc-100 min-h-screen p-8 noto">
      <h1 className="mt-20 text-center text-5xl text-slate-700 font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap mt-20 gap-6 ml-20 mr-20">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="bg-gray-800 p-6 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.role}</p>
              <p className="mt-2 text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
