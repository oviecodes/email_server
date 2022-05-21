const marked = require('marked')

module.exports = {
    /**
     * Simple example.
     * Every monday at 1am.
     */
  
    '01 51 15 * * *': async ({ strapi }) => {

      try {

        let emails = await strapi.service('api::email-template.email-template').find()

        emails = emails.results.reverse()

        const subscribers = await strapi.service('api::mailing-list.mailing-list').find()
        
        const content = marked.parse(emails[0].Content)

        await Promise.all(subscribers.results.map(async (el, i) => {
          
          return await strapi
          .plugin('email')
          .service('email')
          .send({
            to: el.email,
            from: 'alecgee73@gmail.com',
            subject: 'Test mail',
            html: content,
          });

        }))
        
      } catch (error) {
        console.log(error)
      }
    },
  };