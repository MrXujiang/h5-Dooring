const Koa = require('koa');
const { resolve } = require('path');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const logger = require('koa-logger');

const app = new Koa();

app.use(staticServer(resolve(__dirname, './static')));
app.use(koaBody());
app.use(logger());

// 设置跨域
app.use(
  cors({
    origin: function(ctx) {
      if (ctx.url.indexOf('/dooring') > -1) {
        return '*'; // 允许来自所有域名请求
      }
      return '';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'x-test-code'],
    maxAge: 5, //  该字段可选，用来指定本次预检请求的有效期，单位为秒
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'x-requested-with',
      'Content-Encoding',
    ],
  }),
);

let htmlStr = '';

app.use(async (ctx, next) => {
  console.log(ctx.url);
  if (ctx.url === '/dooring/render') {
    htmlStr = ctx.request.body;
    ctx.body = 'success';
  } else if (ctx.url.indexOf('/html') === 0) {
    ctx.type = 'html';
    ctx.body = htmlStr;
  }
});

app.listen(3000);
