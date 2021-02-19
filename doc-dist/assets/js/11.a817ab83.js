(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    360: function(e, t, v) {
      e.exports = v.p + 'assets/img/deploy.d1b1d698.png';
    },
    389: function(e, t, v) {
      'use strict';
      v.r(t);
      var _ = v(42),
        r = Object(_.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              _ = e._self._c || t;
            return _('ContentSlotsDistributor', { attrs: { 'slot-key': e.$parent.slotKey } }, [
              _('p', [e._v('私有化部署需要获取4个核心项目包, 包括')]),
              e._v(' '),
              _('ul', [
                _('li', [e._v('H5编辑器(h5_plus)')]),
                e._v(' '),
                _('li', [e._v('H5基座(h5)')]),
                e._v(' '),
                _('li', [e._v('Dooring管理后台(Dooring-Admin)')]),
                e._v(' '),
                _('li', [e._v('服务端项目(Server)')]),
              ]),
              e._v(' '),
              _('p', [
                e._v('获取以上四个核心源码工程需要满足商业授权协议, 具体可联系'),
                _(
                  'a',
                  {
                    attrs: {
                      href: 'http://h5.dooring.cn/uploads/WechatIMG3_1758e9753e2.jpeg',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [e._v('徐小夕'), _('OutboundLink')],
                  1,
                ),
              ]),
              e._v(' '),
              _('h3', { attrs: { id: '部署架构图' } }, [
                _('a', { staticClass: 'header-anchor', attrs: { href: '#部署架构图' } }, [
                  e._v('#'),
                ]),
                e._v(' 部署架构图'),
              ]),
              e._v(' '),
              _('img', { attrs: { src: v(360), alt: 'H5-dooring部署' } }),
              e._v(' '),
              _('p', [e._v('部署流程如下:')]),
              e._v(' '),
              _('ol', [
                _('li', [e._v('下载4个源码工程, 安装依赖(npm install 或 yarn)')]),
                e._v(' '),
                _('li', [
                  e._v('打包3个前端工程至'),
                  _('code', [e._v('server')]),
                  e._v('的static目录下'),
                ]),
                e._v(' '),
                _('li', [
                  e._v('在'),
                  _('code', [e._v('server')]),
                  e._v('下本地运行 '),
                  _('code', [e._v('yarn start')]),
                  e._v(' 或 '),
                  _('code', [e._v('npm start')]),
                  e._v(' 启动服务端进行本地测试'),
                ]),
                e._v(' '),
                _('li', [
                  e._v('打包服务端代码, '),
                  _('code', [e._v('yarn build')]),
                  e._v(' 生成 '),
                  _('code', [e._v('dist')]),
                  e._v(' 目录, 建议使用 '),
                  _('code', [e._v('pm2')]),
                  e._v(' 做'),
                  _('code', [e._v('nodejs')]),
                  e._v('服务的负载均衡, 运行 '),
                  _('code', [e._v('pm2 start dist/index.js')]),
                  e._v('启动生产环境代码'),
                ]),
              ]),
              e._v(' '),
              _('p', [
                e._v('也可以将以上步骤集成到gitlab等CI, CD服务中, 进行自动化打包发布, 或者采用'),
                _('code', [e._v('docker')]),
                e._v('进行容器化部署.'),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = r.exports;
    },
  },
]);
