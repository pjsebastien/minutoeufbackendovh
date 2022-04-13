module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65877235107ae15713450a11392dc0c9'),
  },
});
