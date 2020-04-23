export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea1fcf6e48d9f0c904caa24',
                  title: 'Sanity Studio',
                  name: 'gatsby-cms-studio',
                  apiId: '22489a92-087d-44b2-8a0c-024607650a6a'
                },
                {
                  buildHookId: '5ea1fcf6d36dc2fa4dbacc33',
                  title: 'Blog Website',
                  name: 'gatsby-cms-web',
                  apiId: '1028de68-c798-4390-b112-07cae16c7467'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yaseen1989/gatsby-cms',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-cms-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
