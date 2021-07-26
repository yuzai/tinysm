import { ContextProvider } from './tinysm';
import store from './store';
import Counter from './counter';
import Control from './control';
import TodoList from './todolist';
import AddTodo from './addtodo';

const App = () => {
    console.log('simple app rendered');

    return (
        <ContextProvider value={store}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
            }}>
                <Counter />
                <Control />
                <AddTodo />
                <TodoList />
            </div>
        </ContextProvider>
    )
};

export default App;