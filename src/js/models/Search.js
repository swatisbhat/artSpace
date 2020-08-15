import axios from 'axios';
import { metMuseumAPIBaseURL } from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getArtifact(objectID) {
		const object = await axios(`${metMuseumAPIBaseURL}objects/${objectID}`);
		return object.data;
	}

	async getResults() {
		try {
			const res = await axios(
				`${metMuseumAPIBaseURL}search?q=${this.query}`
			);

			this.result = await Promise.all(
				// TODO: handle case when array is null
				res.data.objectIDs
					.slice(0, 10)
					.map((objectID) => this.getArtifact(objectID))
			);
		} catch (error) {
			alert(error);
		}
	}
}
