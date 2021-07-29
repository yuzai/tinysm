# a simple state management for react using hooks

## purpose

In some simple project, there are some state management requirement, but redux is too heavy to involve. then, this tiny tool is for you. And don't worry the rerender becouse of [react contenxt render problem](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

## usage

```
npm install --save hooks-tinysm
```

## getting start

let's start with a simple counter

step1: create a store.js file in root directory like blow:

```js
import { createStore } from 'hooks-tinysm';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'MINUS_COUNT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        ...state
      };
  }
};

export default createStore(reducer, initialState);
```

step2: in your root App.js file, add some code like blow:

```js
import React from 'react';
import { ContextProvider } from 'hooks-tinysm';
import store from './store';
import Counter from './Counter';
import './style.css';

export default function App() {
  return (
    <ContextProvider value={store}>
      <Counter />
    </ContextProvider>
  );
}
```

step3: in Counter.js file, wirite code like blow:

```js
import React from 'react';
import { useDispatch, useSelector } from 'hooks-tinysm';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_COUNT'
          });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'MINUS_COUNT'
          });
        }}
      >
        minus
      </button>
    </div>
  );
};

export default Counter;
```

then, here you are, you finished this simple counter.

you can see the full code in [stacklitz](https://stackblitz.com/edit/react-us68xc)


## what's more
This tool use Context in React, but use a EventEmitter to trigger react render rather than use the react context render. The value in ContextProvider is immutable and the ernder is triggerd by eventemitter. When dispatch execued, will notify all component which use useSelector, then in useSelect will do a compare, if not changed of the selected value, this component will not render.

By this way, people can use context without performance worries