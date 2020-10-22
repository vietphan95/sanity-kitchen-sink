export default {
  widgets: [
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
                  buildHookId: '5f917e320f799300b9c446a0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w7qhr9t2',
                  apiId: '0421545b-5371-4648-b4d7-4e1c8df4b1c7'
                },
                {
                  buildHookId: '5f917e32d5cf360095b2ce46',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sorbnycb',
                  apiId: 'e48f8b59-cbfc-4784-affe-3b912a0ef934'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vietphan95/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sorbnycb.netlify.app', category: 'apps'}
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
