/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com","www.google.com","www.iset.com"]
        },
        env:{
            API_URL : "http://localhost:3001/api",
            SECRET :"secret"
            },
        NEX_PUBLIC_URL:"http://localhost:3000/"
};

module.exports = nextConfig;
