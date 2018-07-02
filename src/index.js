import ReviewList from './components/ReviewList';

export function install(Vue) {
  Vue.component('static-review-list', ReviewList);
}

export {
  ReviewList,
};

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: '0.0.1',
  install,
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
