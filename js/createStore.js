const createStore = (reducer) => {
    let state
    function dispatch(action){
        state = reducer(state, action);
        render();
    };

    function getState(){
        return state
    }

    return { dispatch, getState }
}

    function reducer2(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
        return { count: state.count + 1 };

        default:
        return state;
    }
};

let store = createStore(reducer2)
store.dispatch({type: "@@INIT"})


function render() {
  let container = document.getElementById('container');
    container.textContent = store.getState().count;
};

store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
