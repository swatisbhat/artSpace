import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** Global state of the app
 * - Search object
 * - Current art object
 * - Liked art objects
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
	const query = searchView.getInput();

	if (query) {
		state.search = new Search(query);

		try {
			await state.search.getResults();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert('Something wrong with the search...');
		}
	}
};

elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});
