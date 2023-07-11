/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'samerportfoliobucket.s3.us-east-2.amazonaws.com',
        },
      ],
    },
  }
