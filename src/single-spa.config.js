import { registerApplication, start } from 'single-spa';

import { loadJS } from './common/utils';

// 当url前缀为 /react的时候.返回 true (底层路由)
const activityFunction = location => location.pathname.startsWith('/react');

// 注册应用 
registerApplication(
  // 应用名称
  'reactApp',
  // 加载功能（要加载的入口点）
  async () => {
    await loadJS('http://localhost:8002/static/js/bundle.js');
    return window.ReactApp;
  },
  // 活动功能（判断是否加载应用程序的逻辑）
  activityFunction
);

// 注册应用 
registerApplication(
  // 应用名称
  'IMApp',
  // 加载功能（要加载的入口点）
  () => import('./pages/im/index'),
  // 活动功能（判断是否加载应用程序的逻辑）
  location => location.pathname.startsWith('/im')
);

// 注册应用 
registerApplication(
  // 应用名称
  'testApp',
  // 加载功能（要加载的入口点）
  () => import('./pages/test/index'),
  // 活动功能（判断是否加载应用程序的逻辑）
  location => location.pathname.startsWith('/test')
);

// 启动
start();