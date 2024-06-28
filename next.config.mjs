/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'pagedone.io',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'avatars3.githubusercontent.com',
            port: '',
            pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
