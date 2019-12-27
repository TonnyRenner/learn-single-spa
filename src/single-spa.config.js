import { registerApplication, start } from 'single-spa';

// 注册应用 
registerApplication(
  // 应用名称
  'page1',
  // 加载功能（要加载的入口点）
  () => import('./Page1/index'),
  // 活动功能（判断是否加载应用程序的逻辑）
  location => location.pathname.startsWith('/page1')
);

registerApplication(
  // 应用名称
  'im',
  // 加载功能（要加载的入口点）
  () => import('./IM/index'),
  // 活动功能（判断是否加载应用程序的逻辑）
  location => location.pathname.startsWith('/im')
);

// 启动
start();