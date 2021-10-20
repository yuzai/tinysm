import { useContext, createContext, useRef, useEffect, useReducer } from 'react';

const Context = createContext();

const EventCenter = {
    listensers: [],
    subscribe: function (func) {
        this.listensers.push(func);
    },
    unsubscribe: function (func) {
        for (let i = 0; i< this.listensers.length; i++) {
            const listenser = this.listensers[i];
            if (listenser === func) {
                this.listensers.splice(i, 1);
                return;
            }
        }
    },
    notify: function() {
        this.listensers.forEach(v => v());
    },
}

function createStore(reducer, initailState, actions = {}) {
    const store = {
        state: initailState,
        actions,
        dispatch: function (action) {
            if (this.actions[action.type]) {
                const act = this.actions[action.type];
                if (typeof act === 'function') {
                    act(this.state, action, this.dispatch);
                } else {
                    console.error('action is not a function');
                }
            } else {
                this.state = reducer(this.state, action);
                EventCenter.notify();
            }
        }
    }
    store.dispatch = store.dispatch.bind(store);
    return store;
};

const ContextProvider = Context.Provider;

function shadowEqual(a, b) {
    if (typeof a !== 'object') {
        return a === b;
    }
    if (a === null) {
        return b === null;
    }
    const akeys = Object.keys(a);
    const bkeys = Object.keys(b);
    if (akeys.length !== bkeys.length) {
        return false;
    }
    for (let i = 0; i < akeys.length; i++) {
        const key = akeys[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

const useSelector = (selector, equalFunc = (a, b) => a === b) => {
    const store = useContext(Context);
    const state = selector(store.state);
    const preState = useRef(state);
    const [, forceRender] = useReducer(s => s + 1, 0);

    const checkForUpdate = () => {
        const curState = selector(store.state);

        if (equalFunc(curState, preState.current)) {
            return;
        }

        preState.current = curState;
        forceRender();
    };

    useEffect(() => {
        EventCenter.subscribe(checkForUpdate);
        return () => {
            EventCenter.unsubscribe(checkForUpdate);
        }
        // eslint-disable-next-line
    }, [store]);
    return state;
};

const useDispatch = () => {
    const store = useContext(Context);

    return store.dispatch;
};

export {
    createStore,
    ContextProvider,
    useSelector,
    useDispatch,
    shadowEqual,
}