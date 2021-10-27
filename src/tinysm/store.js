import { createStore } from './tinysm';

const initialState = {
    count: 0,
    todoItems: [
        'first',
        'second',
        'third',
        'forth',
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return {
                ...state,
                count: state.count + 1
            };
        case 'MINUS': 
            return {
                ...state,
                count: state.count + 1
            };
        case 'SET':
            return {
                ...state,
                count: action.payload
            };
        case 'ADD_TODO':
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload],
            };
        case 'DELETE_TODO':
            const arr = [...state.todoItems];
            arr.splice(action.payload, 1);
            return {
                ...state,
                todoItems: arr,
            };
        default: 
            return {
                ...state,
            };
    }
}

const actions = {
    getAfterThreeSec: (state, commit, action) => {
        setTimeout(() => {
            commit({
                type: 'ADD_TODO',
                payload: action.payload,
            })
        }, 3000);
    }
}

export default createStore(reducer, initialState, actions);