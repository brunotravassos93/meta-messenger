/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "1000logos.net",
      "scontent.fjpa1-1.fna.fbcdn.net",
      "images.unsplash.com",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
