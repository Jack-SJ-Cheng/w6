module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/w6/' // w6 為 repo 名稱
      : '/'
  }