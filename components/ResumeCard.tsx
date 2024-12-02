import React from 'react';

interface ResumeCardProps {
  title: string;
  role: string;
  time: string;
  description: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ title, role, time, description }) => {
  return (
    <div className="text-white pl-5 pt-6">
      <div className="flex justify-between items-start">
        <h3>
          <span className="text-lg font-semibold">{title}</span> <span className="font-light text-gray-200 text-sm"> | {role}</span>
        </h3>
        <p className="text-sm text-zinc-400">{time}</p>
      </div>
      <p className="mt-2 text-md text-gray-300 font-extralight">{description}</p>
    </div>
  );
};

export default ResumeCard;
