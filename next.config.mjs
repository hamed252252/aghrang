/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.alibaba.ir",
                pathname: "/ostorage/**", // Fix the pathname to match the external URL pattern
            },
        ],
        domains: ["via.placeholder.com", "img.freepik.com"], // Add additional external domains here if needed
    },
};

export default nextConfig;
