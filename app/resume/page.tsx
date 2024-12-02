import React from 'react';
import ResumeCard from '@/components/ResumeCard';

const Resume = () => {
  const experiences = [
    {
      title: 'Classics 4 Kids',
      role: 'President',
      time: 'August 2024 – Present',
      description:
        'Developed and implemented platform for students to learn CS; Oversaw and designed course materials; taught CS to underprivileged Tanzanian students.',
    },
    {
      title: 'HarkerDEV',
      role: 'Web Developer',
      time: 'June 2024 – Present',
      description:
        'Maintained and managed site of financial nonprofit; authored economic news articles; organized entrepreneurship competition for middle schoolers.',
    },
    {
      title: 'HSLT',
      role: 'Media Lead',
      time: 'August 2024 – Present',
      description:
        'Maintained and managed site of financial nonprofit; authored economic news articles; organized entrepreneurship competition for middle schoolers.',
    },
    {
      title: 'HarkerJCL',
      role: 'Certamen Captain',
      time: 'August 2024 – Present',
      description:
        'Maintained and managed site of financial nonprofit; authored economic news articles; organized entrepreneurship competition for middle schoolers.',
    },

  ];

  const personalInfo = {
    name: 'Demi Zheng',
    email: '27demiz@students.harker.org',
    phone: '(408) 754-7996',
    website: 'https://demiz.vercel.app',
    location: 'San Jose, CA',
  };

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

          {/* Add Projects and Education sections here */}
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
