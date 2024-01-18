import { client } from '@/sanity/lib/client';
import Image from 'next/image';

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
            <Image src={p.imgUrl} alt='' height={20} width={20} />
          </li>
        ))}
    </ul>
  );
}
