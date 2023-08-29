export default async function FetchData() {
	const url = 'http://localhost:8080/notes';

	const response = await fetch(url);
	// console.log(response);
	const data = await response.json();

	return data;
}
