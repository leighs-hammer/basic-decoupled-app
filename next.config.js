module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://basic-decoupled-app.vercel.app https://*.myshopify.com",
          },
        ],
      },
      // {
      //   source: "/(.*?)",
      //   has: [
      //     {
      //       type: "query",
      //       key: "shop",
      //     },
      //   ],
      //   headers: [
      //     {
      //       key: "Content-Security-Policy",
      //       value: "frame-ancestors 'self' https://basic-decoupled-app.vercel.app https://:shop;",
      //     },
      //   ],
      // },
    ];
  },
}
