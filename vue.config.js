module.exports = {
    devServer: {
        proxy: 'http://mathpar.ukma.edu.ua/learning'
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/learning/assets/' : '/'
}
