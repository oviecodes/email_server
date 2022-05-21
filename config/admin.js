module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e79dde78eed1b5a2d889593983063e57'),
  },
});
