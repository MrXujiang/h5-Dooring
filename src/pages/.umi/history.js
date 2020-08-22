// create history
const history = require('umi/lib/createHistory').default({
  basename: window.routerBase,
});
window.g_history = history;
export default history;
