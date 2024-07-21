/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN,
    SEND_EMAIL_API_ENDPOINT: process.env.SEND_EMAIL_API_ENDPOINT,
  },
};

module.exports = nextConfig;
