import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearSearchInput = () => (elements.searchInput.value = '');

export const clearSearchResults = () => (elements.searchResList.innerHTML = '');

const renderArtifact = (artifact) => {
	console.log(artifact);
	const markup = `
	
	<div class="card">
		<a  href="#${artifact.objectID}"><img
			src="${artifact.primaryImageSmall}"
			class="card-img-top"
			alt="${artifact.title}"
		/></a>
		<div class="card-body">
			<h6 class="card-subtitle text-muted">
			${artifact.artistDisplayName}
			</h6>
			<p>
			${artifact.title}
			</p>
		</div>
	</div>
	`;
	elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (artifacts) => {
	artifacts.forEach(renderArtifact);
};
