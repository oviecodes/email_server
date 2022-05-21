module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          pool: true,
          logger: true,
          debug: true,
          maxConnections: 10000
        },
        
        settings: {
          defaultFrom: 'alecgee73@gmail.com',
          defaultReplyTo: '',
        },
      },
    },
});