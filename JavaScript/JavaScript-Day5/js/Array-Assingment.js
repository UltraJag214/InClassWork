function multiplyArrays(array1, array2) {
    let resultArray = [];
        // your code here

        if(array1.length != array2.length) {
            throw "Array lengths are not equal"
        }

        for(let i = 0; i <array1.length; i++) {
            resultArray[i] = array1[i] * array2[i];
        }

        return resultArray;
    }
    // test
    let answerArray = multiplyArrays([1,2,3,4], [5,6,7,8]);
    // answerArray == [5, 12, 21, 32];
    