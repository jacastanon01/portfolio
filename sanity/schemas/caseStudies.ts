export default {
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
      name: 'mission',
      title: 'Mission',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'process',
      title: 'Process',
      type: 'string',
    },
    {
      name: 'result',
      title: 'Result',
      type: 'string',
    },
  ],
};
