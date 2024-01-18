export const caseStudies = {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'project',
      type: 'reference',
      to: [
        {
          type: 'projects',
          title: 'Project',
        },
      ],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'challenges',
      title: 'Process and Challenges',
      type: 'text',
    },
    {
      name: 'result',
      title: 'Results and Lessons',
      type: 'text',
    },
  ],
};
