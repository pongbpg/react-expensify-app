import { createStore } from 'redux';
//Action generators - fucntion that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

//Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT', incrementBy: 5 });
// store.dispatch({ type: 'RESET' });
store.dispatch(resetCount());
// unsubscribe();
// store.dispatch({ type: 'DECREMENT' });
// store.dispatch({ type: 'DECREMENT', decrementBy: 2 });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'SET', count: 100 });
store.dispatch(setCount({ count: 55 }));

// store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());

