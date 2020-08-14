import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderArtifact = (artifact) => {
	console.log(artifact);
	const markup = `
	<div class="list-group-item border-0">
	<div class="card m-0 p-0" style="width: 15rem;">
		<img
			src="${artifact.primaryImageSmall}"
			class="card-img-top"
			alt="${artifact.title}"
		/>
		<div class="card-body">
			<h6 class="card-subtitle text-muted">
			${artifact.artistDisplayName}
			</h6>
			<p>
			${artifact.title}
			</p>
		</div>
	</div>
</div>
	`;
	elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (artifacts) => {
	artifacts.forEach(renderArtifact);
};
