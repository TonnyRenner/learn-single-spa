import { registerApplication, start } from 'single-spa';

// 加载react 项目的入口js文件 (模块加载)
const loadingFunction = () => import('./src/index');

// 当url前缀为 /react的时候.返回 true (底层路由)
const activityFunction = location => location.pathname.startsWith('/react');

// 注册应用 
registerApplication(
  // 应用名称
  'react',
  // 加载功能（要加载的入口点）
  loadingFunction,
  // 活动功能（判断是否加载应用程序的逻辑）
  activityFunction
);

// 启动
start();