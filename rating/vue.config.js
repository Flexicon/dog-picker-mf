module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, x-id, Content-Length, X-Requested-With',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  },
  filenameHashing: false,
}
