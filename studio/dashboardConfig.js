export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6027f4fe37f50960d248eb86',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kv4uky2k',
                  apiId: '8a3ee833-a39d-4b92-95c8-28992ee675c2'
                },
                {
                  buildHookId: '6027f4ff24ed4f79dc7b5aca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1fziagpk',
                  apiId: 'c9c84b74-33c2-4818-a04e-bcfb5b6293db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rcaracaus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1fziagpk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
