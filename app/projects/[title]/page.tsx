export default async function CaseStudyPage({
  params,
}: {
  params: { title: string };
}) {
  return <div>{params.title}</div>;
}
