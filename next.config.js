/** @type {import("next").NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
module.exports = { output: "export", basePath, images: { unoptimized: true }, trailingSlash: true, poweredByHeader: false };
