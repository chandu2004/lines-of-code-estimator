const dev = process.env.NODE_ENV !== 'production';
module.exports = {
    env: {
      base_url: dev ? 'http://localhost:3000/' : 'https://lines-of-code-estimator.vercel.app/',
    }
}
  