//这两个文件是作为webpack的entry文件存在的，import是es6的写法。
import './index.html';
import './index.less';

import dva from 'dva';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
