import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.less';
import store from 'store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { DevTools, loadServer } from 'jira-dev-tool';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Test } from 'pages/Test'

  ReactDOM.render(
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>,
    document.getElementById('root')
  )

serviceWorker.unregister();