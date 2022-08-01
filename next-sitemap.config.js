/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.APP_URL || 'https://www.contentful-bot.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
}