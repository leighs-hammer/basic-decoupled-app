module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://*.myshopify.com", // used when no shop param is passed in
          },
        ],
      },
      {
        source: "/(.*?)",
        has: [
          {
            type: "query",
            key: "shop",
          },
        ],
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://:shop;", // locked to the shop for embedding
          },
        ],
      },
    ];
  },
}
