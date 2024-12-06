import React from 'react';
import ResumeCard from '@/components/ResumeCard';

const Resume = () => {
  const experiences = [
    {
      title: 'Classics 4 Kids',
      role: 'President',
      time: 'August 2024 – Present',
      description:
        'Leading a nonprofit dedicated to teaching elementary students about Greek and Roman culture. Designed engaging lesson plans, organized library sessions, and expanded outreach to local schools.',
    },
    {
      title: 'HarkerDEV',
      role: 'Project Lead',
      time: 'June 2024 – Present',
      description:
        'Developed and maintained web applications to enhance school life. Worked on projects like Swap&Share.',
    },
    {
      title: 'HSLT',
      role: 'Media Lead',
      time: 'August 2024 – Present',
      description:
        'Directed media and communication efforts for the Harker Student Leadership Team. Managed online presence, created promotional content, and supported event marketing campaigns.',
    },
    {
      title: 'HarkerJCL',
      role: 'Certamen Captain',
      time: 'August 2024 – Present',
      description:
        'Led the Certamen team, focusing on preparing students for Latin quizbowl competitions. Organized practice sessions, developed study resources, and enhanced team performance.',
    },

  ];

  const projects = [
    {
      title: 'Legit App',
      role: 'Co-developer',
      description:
        'An interactive web app for reading Latin texts. Users can click on words to view vocabulary, with plans to allow text and translation uploads. Built with Next.js, Tailwind CSS, and Firebase.',
    },
    {
      title: 'Swap&Share',
      role: 'Project Lead',
      description:
        'A digital textbook exchange platform for Harker students. Features include listing textbooks, earning credits, and browsing by subject. Developed with Next.js and Tailwind CSS.',
    },
    {
      title: 'HarkerJCL Website',
      role: 'Webmaster',
      description:
        'A dynamic platform for the Harker Junior Classical League, showcasing events, Certamen resources, and a media archive. Built with Next.js, Tailwind CSS, and the Google Calendar API.',
    },
    {
      title: 'Certamen App',
      role: 'Lead Developer',
      description:
        'A community initiative to introduce elementary students to Mediterranean history and culture through engaging activities. Expanded from library sessions to school programs.',
    },
  ];

  const personalInfo = {
    name: 'Demi Zheng',
    email: '27demiz@students.harker.org',
    phone: '(408) 754-7996',
    website: 'https://demiz.vercel.app',
    location: 'San Jose, CA',
  };


  const education = [
    {
      institution: 'The Harker School',
      time: 'August 2023 – Present',
      role: '4.0/4.0 or 4.66/4.8 GPA',
      description:
        'Relevant Coursework: AP Computer Science A with Honors Data Structures, ATCS: Programming Languages, ATCS: Computer Architecture, AP Chemistry, AP Calculus BC, AP Latin, AP European History',
    },
  ];

  const skills = {
    proficient: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'React', 'Git'],
    intermediate: ['Python', 'SQL', 'Git', 'Figma', 'Adobe Photoshop'],
  };

  return (
    <main className="bg-zinc-900 text-zinc-100 min-h-screen p-10">
      <h1 className="ml-32 text-6xl font-bold mt-6 mb-6">My Resume</h1>

      {/* Split Section Layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 mt-10">
        {/* Left Section */}
        <div className="w-full lg:w-8/12">
          <section className="mb-8">
            <h2 className="text-xl font-light underline ml-32">Experience</h2>
            <div className="ml-32 mt-4 space-y-4">
              {experiences.map((exp, index) => (
                <ResumeCard
                  key={index}
                  title={exp.title}
                  role={exp.role}
                  time={exp.time}
                  description={exp.description}
                />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-light underline ml-32">Projects</h2>
            <div className="ml-32 mt-4 space-y-4">
              {projects.map((proj, index) => (
                <ResumeCard
                  key={index}
                  title={proj.title}
                  role={proj.role}
                  time=""
                  description={proj.description}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-light underline ml-32">Education</h2>
            <div className="ml-32 mt-4 space-y-4">
              {education.map((edu, index) => (
                <ResumeCard
                  key={index}
                  title={edu.institution}
                  role={edu.role}
                  time={edu.time}
                  description={edu.description}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-4/12 pr-20 space-y-8">
          {/* Personal Info */}
          <section>
            <h2 className="text-xl font-light underline">Personal Information</h2>
            <div className="mt-4 space-y-4">
              {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <p className="text-sm font-light">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  <p className="text-sm font-medium text-right">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-light underline">Skills</h2>
            <div className="mt-4">
              <p>
                <strong>Proficient:</strong> {skills.proficient.join(', ')}
              </p>
              <p>
                <strong>Intermediate:</strong> {skills.intermediate.join(', ')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;
