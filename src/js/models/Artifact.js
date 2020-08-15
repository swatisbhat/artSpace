export default class Artifact {
	constructor(artifact) {
		this.id = artifact.objectID;
		this.title = artifact.title;
		this.image = artifact.primaryImage;
		this.department = artifact.department;
		this.objectName = artifact.objectName;
		this.culture = artifact.culture;
		this.period = artifact.period;
		this.objectDate = artifact.objectDate;
		this.medium = artifact.medium;
		this.creditLine = artifact.creditLine;
		this.country = artifact.country;
		this.linkResource = artifact.linkResource;
		this.rightsAndReproduction = artifact.rightsAndReproduction;
		this.objectWikidata_URL = artifact.objectWikidata_URL;

		this.artist = artifact.artistDisplayName;
		this.artistBio = artifact.artistDisplayBio;
		this.artistWiki = artifact.artistWikidata_URL;
		this.artistNationality = artifact.artistNationality;
	}
}
