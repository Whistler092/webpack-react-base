import { createStore } from 'redux';

// console.log("ola ke ase?");
const $form = document.getElementById("form");

$form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData($form);
    const title = data.get('title');

    store.dispatch({
        type: 'ADD_SONG',
        payload: { title } //Es mejor enviar un objeto para no cambiar el modelo de datos.
    })
});

const initialState = [
    {
        "title": "One More Time",
    },
    {
        "title": "King without crown",
    },
    {
        "title": "It never ends",
    }
]

const reducer = function (state, action){
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload ]
        default:
            return state;
    }
}

const store = createStore(
    reducer, //reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render(){
    const $container = document.getElementById("playlist");
    const playlist = store.getState();
    $container.innerHTML = '';

    playlist.forEach(item => {
        const template = document.createElement('p');
        template.textContent = item.title;

        $container.appendChild(template);
    });
}

render();
function handleChange(){
    render();
}

store.subscribe(handleChange);