import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { parse } from 'date-fns';

const DATE_FORMAT = 'MMM dd, yyyy'; // Your date format
const articlesDirectory = path.join(process.cwd(), 'articles');

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // Remove ".md" from the file name
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the front matter and content of the markdown file
    const { data, content } = matter(fileContents);

    return {
      id,
      date: data.date,
      title: data.title,
      description: data.description,
      category: data.category,
      content,
    };
  });

  // Sort articles by date (newest first)
  const sortedArticles = allArticlesData.sort((a, b) => {
    const dateA = parse(a.date, DATE_FORMAT, new Date());
    const dateB = parse(b.date, DATE_FORMAT, new Date());
    return dateB.getTime() - dateA.getTime(); // Descending order
  });

  return sortedArticles;
}
/*export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // Remove ".md" from the file name
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the front matter and content of the markdown file
    const { data, content } = matter(fileContents); // Ensure content is extracted here

    return {
      id,
      date: data.date,
      title: data.title,
      description: data.description,
      category: data.category,
      content, // Return content here
    };
  });

  return allArticlesData;
}*/

export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data as { date: string; title: string; description: string; category: string },
  };
}
