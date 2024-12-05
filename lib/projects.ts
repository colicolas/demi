import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


interface JournalData {
  title: string;
  contentHtml: string;
  [key: string]: any; // Allow other optional front matter fields
}


interface ProjectData {
  title: string;
  image: string; // Add other front matter properties as needed
  contentHtml: string;
  [key: string]: any; // Allow for additional optional fields
}

const projectsDirectory = path.join(process.cwd(), 'projects');

// Fetch all projects for the homepage
export function getSortedProjectsData() {
  const projectNames = fs.readdirSync(projectsDirectory);
  return projectNames.map((projectName) => {
    const descPath = path.join(projectsDirectory, projectName, 'desc.md');
    const fileContents = fs.readFileSync(descPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: projectName,
      title: data.title,
      role: data.role,
      description: data.description,
      image: data.image || '/placeholder.png', // Optional image
    };
  });
}

export async function getProjectData(projectName: string): Promise<ProjectData> {
  const descPath = path.join(projectsDirectory, projectName, 'desc.md');
  const fileContents = fs.readFileSync(descPath, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title, // Explicitly extract the title
    image: data.image, // Explicitly extract the image
    contentHtml,
    ...data, // Include any other optional fields
  };
}

export function getProjectJournalLinks(projectName: string) {
  const projectDir = path.join(projectsDirectory, projectName);
  const journalFiles = fs.readdirSync(projectDir).filter((file) => file.endsWith('.md') && file !== 'desc.md');

  return journalFiles.map((file) => {
    const id = file.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(projectDir, file), 'utf8');
    const { data } = matter(fileContents);

    return {
      id,
      date: data.date,
      title: data.title,
    };
  });
}

export async function getJournalData(
  projectName: string,
  journalId: string
): Promise<JournalData> {
  const journalPath = path.join(projectsDirectory, projectName, `${journalId}.md`);
  const fileContents = fs.readFileSync(journalPath, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title, // Explicitly access the `title` property
    contentHtml,
    ...data, // Include any other front matter fields dynamically
  };
}
