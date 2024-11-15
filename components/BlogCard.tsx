'use client';
import Link from 'next/link';
import { useState } from 'react';

interface BlogCardProps {
  id: string;
  date: string;
  title: string;
  category: string;
  readingTime: string;
  categoryColor: string;
}

export default function BlogCard({ id, date, title, category, readingTime, categoryColor }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center justify-between py-3 w-full border-b border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/thoughts/${id}`} className="w-full flex items-center justify-between text-gray-800">
        <span className="w-1/6 text-xs font-bold text-blue-400">{date}</span>
        
        <span 
          className={`text-md font-semibold w-1/2 truncate transition-colors duration-300 ${
            isHovered ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {title}
        </span>
        
        <span className={`text-gray-400 text-sm font-medium w-1/6 text-center`}>{category}</span>
        
        <span 
          className={`text-gray-500 text-sm w-1/6 text-right flex items-center transition-all duration-500 ${
            isHovered ? 'pr-3' : 'pr-0'
          }`}
        >
          {readingTime}
          <span
            className={`ml-1 text-gray-600 transition-opacity duration-500 ease-in-out transform ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1'
            }`}
          >
            ›
          </span>
        </span>
      </Link>
    </div>
  );
}
