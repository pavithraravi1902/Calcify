function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const numArray = numbers.split(",");
    if (numArray.length === 1) {
        return parseInt(numArray[0], 10);
    }

    return parseInt(numArray[0], 10) + parseInt(numArray[1], 10);
}

export default add;
