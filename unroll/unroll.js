// We want to write a function that takes a so-called 'multi-dimensional' array, that lists each element
// in the pattern of a spiral into a new single array. This would start with the first array of the input value.
// Then directly down, using the last index value of the rest of the arrays. Next, the values going left from where
// we left off are added into this new array of ours (basically looping through each element of the last array starting with
// the last index). This would then lead to reading the left-most values that haven't been read yet, and repeat the whole process.

function unroll(squareArray) {
	let newArray = squareArray[0].map((element) => element);

	squareArray.forEach((array) => {
		if (array !== squareArray[0]) {
			newArray.push(array.at(-1));
		}
	});

	squareArray.at(-1).slice().reverse().forEach((element) => {
		if (element !== squareArray.at(-1).at(-1)) {
			newArray.push(element);
		}
	});

	squareArray.slice().reverse().forEach((array) => {
		if (array !== squareArray[0] && array !== squareArray.at(-1)) {
			newArray.push(array[0]);
		}
	});

	squareArray[1].forEach((element) => {
		if (element !== squareArray[1].at(0) && element !== squareArray[1].at(-1)) {
			newArray.push(element);
		}
	});

	if (squareArray[1] === squareArray.at(-2)) {
		return newArray;
	}

	squareArray[2].slice().reverse().forEach((element) => {
		if (element !== squareArray[2].at(0) && element !== squareArray[2].at(-1)) {
			newArray.push(element);
		}
	});

	return newArray;
}

module.exports = unroll;
