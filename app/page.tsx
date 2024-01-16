import { client } from '@/sanity/lib/client';

export default async function Home() {
  const projects = await client.fetch<any[]>(
    `*[_type == "projects"]`
  );
  return (
    <ul>
      {projects &&
        projects.map((p) => (
          <li key={p._id}>
            <h1 className=' text-xl'>{p.title}</h1>
            <p>{p.description}</p>
          </li>
        ))}
    </ul>
  );
}
