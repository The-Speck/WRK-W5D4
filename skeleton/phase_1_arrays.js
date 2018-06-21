//Uniq
Array.prototype.uniq = function () {
    const newArray = [];
    this.forEach ((el) => {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    });
    return newArray;
};

//twoSum
Array.prototype.twoSum = function () {
    const positionArray = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
			      if (this[i] + this[j] === 0) {
                positionArray.push([i, j]);
            }
        }
    }
    return positionArray;
};

//transpose
Array.prototype.transpose = function() { 
    let myTransposed = [];
    for (let i = 0; i < this[0].length; i++) {
		    let temp = [];
        for (j = 0; j < this.length; j++) {
            temp.push(this[j][i]);
        }
		myTransposed.push(temp);
    }
    return myTransposed;
};

