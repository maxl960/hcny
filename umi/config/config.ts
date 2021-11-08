import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

const filePath = '/app/'
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  alias: {
    'conf': './',
  },
  // base默认前缀
  // base: filePath,
  targets: { ie: 10 },
  // publicPath静态目录
  publicPath: filePath,
  // outputPath打包目录
  outputPath: '../mgmt/public/app/',
  // routes,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // fastRefresh: {},
  exportStatic: {},
  history: { type: 'hash' }
});