/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nextjs-blog-yangheat.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ['/api/*'],
}
