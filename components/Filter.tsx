'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface FilterProps {
  categoryColors: { [key: string]: string };
}

const Filter: React.FC<FilterProps> = ({ categoryColors }) => {
  const router = useRouter();

  const handleCategoryChange = (category: string) => {
    router.push(`/thoughts?category=${category}`);
  };

  return (
    <select onChange={(e) => handleCategoryChange(e.target.value)} className="bg-gray-800 text-white p-2 rounded ml-20">
      <option value="">All Categories</option>
      {Object.keys(categoryColors).map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default Filter;
/*import React from 'react';

interface FilterProps {
  categoryColors: { [key: string]: string };
  onChange: (category: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ categoryColors, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
      <option value="">All Categories</option>
      {Object.keys(categoryColors).map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default Filter;*/
