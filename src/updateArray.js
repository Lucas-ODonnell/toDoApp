//This is to concat without duplicates the myEvents array with the currentEvents based on project_idarray
export function updatedArray(array1, array2) {
	let newArray = array1.concat(array2);
	newArray = [...new Set([...array1, ...array2])];
	return newArray;
}
