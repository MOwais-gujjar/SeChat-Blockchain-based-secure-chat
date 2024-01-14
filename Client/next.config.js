/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        swcplugin: [
            ["next-superjson-plugin", {}]
        ]
    },
}

module.exports = nextConfig
