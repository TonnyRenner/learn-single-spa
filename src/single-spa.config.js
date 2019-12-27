import { registerApplication, start } from 'single-spa';

/**
 * runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
 * @param {String} url url
 */
const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

// 加载react 项目的入口js文件 (模块加载)
const loadingFunction = async () => {
  // await runScript('http://localhost:8002/static/js/bundle.js');
  await runScript('http://localhost:3001/static/js/main.js');
  return window.reactApp;
};

// 当url前缀为 /react的时候.返回 true (底层路由)
const activityFunction = location => location.pathname.startsWith('/react');

// 注册应用 
registerApplication(
  // 应用名称
  'reactApp',
  // 加载功能（要加载的入口点）
  loadingFunction,
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