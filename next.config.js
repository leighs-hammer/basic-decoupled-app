module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*?)",
        has: [
          {
            type: "query",
            key: "shop",
            value: "(?<shop>[a-zA-Z0-9][a-zA-Z0-9-]*.myshopify.com[/]?)",
          },
        ],
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://:shop;",
          },
        ],
      },
    ];
  },
}
