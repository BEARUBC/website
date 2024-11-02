/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
            source: '/sponsor',
            destination: '/sponsors',
            permanent: true,
        },
        {
            source: '/contactform',
            destination: '/contact',
            permanent: true,
        },
        {
            source: '/grasp',
            destination: '/projects',
            permanent: true,
        },
        {
            source: '/pilot',
            destination: '/contact',
            permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  