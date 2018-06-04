export async function listAllEvent() {
	let url = "http://api.turisztikaiadatbazis.hu/v1/programs?_format=json";
	let response = await fetch(url);
	let data = await data.json();
	return data;
}