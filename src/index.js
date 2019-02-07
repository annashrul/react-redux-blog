import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Wrapper from './Wrapper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
const store = createStore(rootReducer);



// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
		<Wrapper />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
