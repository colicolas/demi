import Link from 'next/link';
import { getSortedProjectsData } from '@/lib/projects';
import TopBar from '@/components/TopBar';

export default async function ProjectsPage() {
  const projects = getSortedProjectsData();

  return (
    <div className="bg-zinc-900 min-h-screen p-8 flex flex-col items-center noto">
      <span className="text-zinc-200"><TopBar /></span>
      <h1 className="mt-20 items-center text-center text-5xl text-blue-100 font-bold mb-20">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 max-w-6xl">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="w-full">
            <div className="bg-zinc-900 p-6 hover:bg-zinc-800 hover:scale-105 transition-all duration-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.role}</p>
              <p className="mt-2 text-sm text-gray-200 mb-5 ">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    /*<div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center noto">
      <TopBar />
      <h1 className="mt-20 items-center text-center text-5xl text-slate-700 font-bold mb-20">Projects</h1>
      <div className="flex text-slate-100 justify-center items-center flex-wrap gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="w-full sm:w-1/2 lg:w-1/4">
            <div className="bg-gray-800 p-6 hover:opacity-90 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
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
    </div>*/
  );
}
