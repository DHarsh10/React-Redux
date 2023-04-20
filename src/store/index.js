import { legacy_createStore as createStore, combineReducers } from "redux";


const reducerFunction = (state = { counter: 10 }, action) => {
    if (action.type === 'INC1') {
        return ({ counter: state.counter += action.payload })
    } else if (action.type === 'DEC1') {
        return ({ counter: state.counter -= action.payload })
    }
    return state;
}

const reducerFunctionTwo = (state = { counterTwo: 100 }, action) => {
    if (action.type === 'INC2') {
        return ({ counterTwo: state.counterTwo += action.payload })
    } else if (action.type === 'DEC2') {
        return ({ counterTwo: state.counterTwo -= action.payload })
    }
    return state;
}

const reducers = combineReducers({
    reducerFunction: reducerFunction,
    reducerFunctionTwo: reducerFunctionTwo
})


const store = createStore(reducers);

export default store;