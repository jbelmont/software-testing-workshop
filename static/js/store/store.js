import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/index';
import data from '../data/data';

const store = createStore(rootReducer, { users: data.users });

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
