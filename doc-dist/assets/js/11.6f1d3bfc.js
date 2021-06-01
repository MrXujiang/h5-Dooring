(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    361: function(t, _, v) {
      t.exports = v.p + 'assets/img/deploy.d1b1d698.png';
    },
    394: function(t, _, v) {
      'use strict';
      v.r(_);
      var a = v(42),
        e = Object(a.a)(
          {},
          function() {
            var t = this,
              _ = t.$createElement,
              a = t._self._c || _;
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('p', [t._v('私有化部署需要获取4个核心项目包, 包括')]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('H5编辑器(h5_plus)')]),
                t._v(' '),
                a('li', [t._v('H5基座(h5)')]),
                t._v(' '),
                a('li', [t._v('Dooring管理后台(Dooring-Admin)')]),
                t._v(' '),
                a('li', [t._v('服务端项目(Server)')]),
              ]),
              t._v(' '),
              a('p', [
                t._v('获取以上四个核心源码工程需要满足商业授权协议, 具体可参考'),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'http://h5.dooring.cn/h5_plus/price',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('商业授权方案'), a('OutboundLink')],
                  1,
                ),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '部署架构图' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#部署架构图' } }, [
                  t._v('#'),
                ]),
                t._v(' 部署架构图'),
              ]),
              t._v(' '),
              a('img', { attrs: { src: v(361), alt: 'H5-dooring部署' } }),
              t._v(' '),
              a('p', [t._v('部署流程如下:')]),
              t._v(' '),
              a('ol', [
                a('li', [t._v('下载4个源码工程, 安装依赖(npm install 或 yarn)')]),
                t._v(' '),
                a('li', [
                  t._v('打包3个前端工程至'),
                  a('code', [t._v('server')]),
                  t._v('的static目录下'),
                ]),
                t._v(' '),
                a('li', [
                  t._v('在'),
                  a('code', [t._v('server')]),
                  t._v('下本地运行 '),
                  a('code', [t._v('yarn start')]),
                  t._v(' 或 '),
                  a('code', [t._v('npm start')]),
                  t._v(' 启动服务端进行本地测试'),
                ]),
                t._v(' '),
                a('li', [
                  t._v('打包服务端代码, '),
                  a('code', [t._v('yarn build')]),
                  t._v(' 生成 '),
                  a('code', [t._v('dist')]),
                  t._v(' 目录, 建议使用 '),
                  a('code', [t._v('pm2')]),
                  t._v(' 做'),
                  a('code', [t._v('nodejs')]),
                  t._v('服务的负载均衡, 运行 '),
                  a('code', [t._v('pm2 start dist/index.js')]),
                  t._v('启动生产环境代码'),
                ]),
              ]),
              t._v(' '),
              a('p', [
                t._v('也可以将以上步骤集成到gitlab等CI, CD服务中, 进行自动化打包发布, 或者采用'),
                a('code', [t._v('docker')]),
                t._v('进行容器化部署.'),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '步骤3-4详细流程' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#步骤3-4详细流程' } }, [
                  t._v('#'),
                ]),
                t._v(' 步骤3.4详细流程'),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: '_1-安装项目环境' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-安装项目环境' } }, [
                  t._v('#'),
                ]),
                t._v(' 1. 安装项目环境'),
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '服务器需提前安装node和pm2, 将本项目上传至服务器指定的目录(如/www/activity), 进入项目目录, 执行:',
                ),
              ]),
              t._v(' '),
              a('div', { staticClass: 'language- extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  a('code', [t._v('npm install\n')]),
                ]),
              ]),
              a('h4', { attrs: { id: '_2-修改项目域名' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-修改项目域名' } }, [
                  t._v('#'),
                ]),
                t._v(' 2. 修改项目域名'),
              ]),
              t._v(' '),
              a('p', [
                t._v('进入'),
                a('code', [t._v('./src/config/index.js')]),
                t._v(', 修改'),
                a('code', [t._v('staticPath')]),
                t._v('变量为当前服务器域名/ip, 如'),
                a('code', [t._v('http://xxx.com')]),
                t._v('或'),
                a('code', [t._v('http://xxx.com:8080')]),
                t._v('(如非80端口)'),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: '_3-编译项目' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-编译项目' } }, [
                  t._v('#'),
                ]),
                t._v(' 3. 编译项目'),
              ]),
              t._v(' '),
              a('p', [
                t._v('执行'),
                a('code', [t._v('npm run build')]),
                t._v('编译项目, 生成'),
                a('code', [t._v('dist')]),
                t._v('目录'),
              ]),
              t._v(' '),
              a('h4', { attrs: { id: '_4-运行项目' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#_4-运行项目' } }, [
                  t._v('#'),
                ]),
                t._v(' 4. 运行项目'),
              ]),
              t._v(' '),
              a('p', [
                t._v('在项目根目录执行 '),
                a('code', [t._v('pm2 start dist/index.js')]),
                t._v('启动项目'),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      _.default = e.exports;
    },
  },
]);
