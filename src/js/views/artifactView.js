import { elements } from './base';

export const clearArtifact = () => {
	elements.artifactHeader.innerHTML = '';
	elements.artifact.innerHTML = '';
	elements.artifactContainer.parentElement.classList.add('d-none');
	elements.searchResList.classList.replace(['row', 'p-3'], 'card-columns');
};

export const renderArtifact = (artifact) => {
	elements.artifactContainer.parentElement.classList.remove('d-none');
	elements.searchResList.classList.replace('card-columns', ['row', 'p-3']);

	const headerMarkup = `<a class="navbar-brand">#${artifact.id}</a>`;
	const contentMarkup = `
		<div class="card m-0 p-0">
			<a  href="#${artifact.id}"><img
				src="${artifact.image}"
				class="card-img-top"
				alt="${artifact.title}"
			/></a>
			<div class="card-body">
				<h6 class="card-subtitle text-muted">
				${artifact.artist}
				</h6>
				<p>
				${artifact.title}
				</p>
			</div>
		</div>
        `;
	elements.artifactHeader.insertAdjacentHTML('afterbegin', headerMarkup);
	elements.artifact.insertAdjacentHTML('beforeend', contentMarkup);
};
