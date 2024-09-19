/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.alibaba.ir",
                pathname: "/ostorage/**", // Matches URLs under /ostorage/
            },
            {
                protocol: "https",
                hostname: "lifearchitekture.com",
                pathname: "/**", // Matches all paths under this domain
            },
        ],
        domains: [
            "via.placeholder.com",
            "img.freepik.com",
            "lifearchitekture.com",
        ], // Add additional external domains here if needed
    },
};

export default nextConfig;
