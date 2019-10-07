export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d9b8e6e5127fad11a0b10d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u3o3ux32',
                  apiId: '4821e825-e26c-4eff-bb27-f3a3326b03db'
                },
                {
                  buildHookId: '5d9b8e6e83565e6f6871b1fc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dtrrc3ey',
                  apiId: '84f1ae98-6132-4d05-a235-88a21a34a1e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niyogakiza/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dtrrc3ey.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
