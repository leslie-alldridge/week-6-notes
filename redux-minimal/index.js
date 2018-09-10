import {
	createStore
} from 'redux'
import {
	combineReducers
} from 'redux'
import {
	slothReducer,
	wombatReducer
} from './reducers/reducers'

const store = createStore(
	combineReducers({
		wombatReducer,
		slothReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
	render()
	store.subscribe(render)
})

function render() {
	const state = store.getState(),

		wombats = state.wombatReducer.wombats,
		sloths = state.slothReducer.sloths;

	const slothName = 'SLOTH',
		wombatName = 'WOMBAT';

	document.getElementById('app').innerHTML = renderAnimals(wombats, wombatName) + renderAnimals(sloths, slothName)

	populateAnimals(wombats, wombatName);
	populateAnimals(sloths, slothName);
}

function populateAnimals(animals, name) {

	animals.forEach(animal => {
		document.getElementById(`${animal}`)
			.addEventListener('click', function() {
				store.dispatch({
					type: `DEL_${name}`,
					animal: `${animal}`
				});
			});
		document.getElementById(`${animal}update`).value = animal;
		document.getElementById(`update${animal}`).addEventListener('click', function() {
			let newAnimal = document.getElementById(`${animal}update`).value;
			store.dispatch({
				type: `UPDATE_${name}`,
				animal: `${animal}`,
				newAnimal: `${newAnimal}`,
			});
		});
	});
	document.getElementById('addAnimal' + name).addEventListener('click', function() {
		store.dispatch({
			type: `ADD_${name}`,
			animal: document.getElementById('addBox' + name).value || animals.length
		});
	});
}

function renderAnimals(animals, name) {
	let output = `<h1>${name}S</h1> Add ${name}<input class="form-control" id="addBox${name}"></input><button class="btn btn-primary" id="addAnimal${name}">Add</button><ul>`
	for (const animal of animals) {
		output += `<li>${animal}</li>
    Updayte<input class="form-control" id="${animal}update"></input><button class="btn btn-primary" id="update${animal}">Update</button>
    <button class="btn btn-primary" id="${animal}">Delete animal</button>`
	}
	output += '</ul>'
	return output
}