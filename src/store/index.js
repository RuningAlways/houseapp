import { createStore } from 'redux';
var store = createStore(function(store, action) {
	return 1;
});

console.log(store.getState());
var a = {
	type: 'newadd',
};

store.dispatch(a);
export default store;
