import Search from './models/Search';
import * as searchView from './views/searchView';
import * as artifactView from './views/artifactView';
import { elements } from './views/base';
import Artifact from './models/Artifact';

/** Global state of the app
 * - Search object
 * - Current art object
 * - Liked art objects
 */
const state = {};

const clearHash = () => (window.location.hash = '');

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
	const query = searchView.getInput();

	searchView.clearSearchInput();
	searchView.clearSearchResults();
	if (state.artifact) {
		artifactView.clearArtifact();
	}
	clearHash();

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

/*
 * ARTIFACT CONTROLLER
 */
const controlArtifact = () => {
	const id = window.location.hash.replace('#', '');

	if (id) {
		artifactView.clearArtifact();

		const artifactIndex = state.search.result.findIndex(
			(artifact) => artifact.objectID == id
		);

		state.artifact = new Artifact(state.search.result[artifactIndex]);
		artifactView.renderArtifact(state.artifact);
	}
};

const init = () => {
	window.addEventListener('load', clearHash);
	elements.searchForm.addEventListener('submit', (e) => {
		e.preventDefault();
		controlSearch();
	});
	['hashchange', 'load'].forEach((event) =>
		window.addEventListener(event, controlArtifact)
	);
};

init();
