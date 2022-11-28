/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require('next-transpile-modules')(['@common/components', '@common/utils']);
module.exports = withTM({
  nextConfig,
});
