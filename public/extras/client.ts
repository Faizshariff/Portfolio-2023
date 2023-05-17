// client.ts

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '79bzq0wz',
  dataset: 'production',
  apiVersion : "2021-10-21",
  useCdn: true,
});

interface Project {
  title: string;
  image: {
    url: string;
    alt?: string;
    // Add any other image fields you need
  };
  projectLink: string;
  // Add any other project fields you need
}

const query = `*[_type == "project"] | order(id asc) {
  title,
  id,
  description,
  "imageUrl": image.asset->url,
  projectLink
}`;


const getAllProjects = async (): Promise<any> => {

  const results = await client.fetch<any>(query);
  return results;
};


getAllProjects()

export { getAllProjects };
