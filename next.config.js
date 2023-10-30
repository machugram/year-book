/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images : {
    domains : ['sangw.in', 'localhost', 'picsum.photos','res.cloudinary.com','drive.google.com','media.licdn.com','pbs.twimg.com','doc-00-2o-docs.googleusercontent.com','images.unsplash.com','*'] // <== Domain name
  }
});