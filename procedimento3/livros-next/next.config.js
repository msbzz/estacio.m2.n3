module.exports = {
  
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/livros/:codigo',
        destination: '/api/livros',
      },
    ];
  },
};
