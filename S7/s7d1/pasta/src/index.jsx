import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
const app = () => {
  return (
    <>
      <Provider store={store}>
        <div className="app">
          <PastasContainer />
        </div>
      </Provider>
    </>
  );
}

ReactDOM.render(<App/>,document.getElementById('root') )
