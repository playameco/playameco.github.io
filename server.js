const path = require('path');
const express = require('express');

//server set-up
const Server = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './index.html')
    const publicPath = express.static(path.join(__dirname, './dist'))

    app.use('', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
};
const port = process.env.PORT || 3000;
const app = Server.app();

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'index.html'))
// })

//middleware - passport authentication
const passport = require('passport');
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


//webpack config
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)

// const path = require('path')
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();

// app.use(express.static('dist'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.get('/', function (_, res) { res.sendFile(path.join(__dirname, './index.html')) })

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack')
//   const webpackDevMiddleware = require('webpack-dev-middleware')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const config = require('./webpack.config.js')
//   const compiler = webpack(config)

//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }))
// }

// var port = process.env.PORT || 3000;
// app.listen(port);