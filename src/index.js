module.exports = function toReadable (number) {
  let arr = Array.from(String(number), Number).reverse();
    //console.log(arr);
    let wordArr = [];
    let subWordArr = [];
    let countTriads = 1;
    //console.log(numOfTreads);

    if (number === 0) {
        return 'zero';
    }
    if (arr.length % 3 === 1) {
        arr.push(0);
        arr.push(0);
    }
    if (arr.length % 3 === 2) {
        arr.push(0);
    }

    for (let i = 0; i < arr.length; i++) {
        subWordArr.push(arr[i]);
        subWordArr.push(arr[i + 1]);
        subWordArr.push(arr[i + 2]);
        let zeroTriad = (subWordArr[0] !== 0 || subWordArr[1] !== 0 || subWordArr[2] !== 0);
        //console.log(zeroTriad);
        //console.log(subWordArr);

        if (countTriads === 2 && zeroTriad) {
            wordArr.push('thousand')
        }
        if (countTriads === 3 && zeroTriad) {
            wordArr.push('million')
        }
        if (countTriads === 4 && zeroTriad) {
            wordArr.push('billion')
        }
        if (countTriads === 5 && zeroTriad) {
            wordArr.push('trillion')
        }
        if (countTriads === 6 && zeroTriad) {
            wordArr.push('quadrillion')
        }
        if (countTriads === 7 && zeroTriad) {
            wordArr.push('quintillion')
        }
        if (countTriads === 8 && zeroTriad) {
            wordArr.push('sextillion')
        }
        if (countTriads === 9 && zeroTriad) {
            wordArr.push('septillion')
        }
        //console.log(wordArr);
        wordArr.push(returnTriadsWord(subWordArr));
        countTriads++;
        subWordArr = [];
        i = i + 2;
    }
    return wordArr.reverse().join(' ').replace(/ +/g, ' ').trim();
}

function returnTriadsWord(arrTriad) {
    let wordArr = [];

    if (arrTriad[1] !== 1) {
        for (let j = 0; j <= 2; j++) {
            wordArr.push(returnWord(j + 1, arrTriad[j]));
            // console.log(wordArr);
        }
        return wordArr.reverse().join(' ').replace(/ +/g, ' ').trim();
    }

    if (arrTriad[1] === 1) {
        wordArr.push(returnTwoWord(arrTriad[0]));
        //console.log(wordArr);
        wordArr.push(returnWord(3, arrTriad[2]));
        return wordArr.reverse().join(' ').replace(/ +/g, ' ').trim();
    }
}

function returnTwoWord(num) {
    switch (num) {
        case 1:
            return 'eleven';
        case 2:
            return 'twelve';
        case 3:
            return 'thirteen';
        case 4:
            return 'fourteen';
        case 5:
            return 'fifteen';
        case 6:
            return 'sixteen';
        case 7:
            return 'seventeen';
        case 8:
            return 'eighteen';
        case 9:
            return 'nineteen';
        case 0:
            return 'ten';
    }
}

function returnWord(index, num) {
    if (index === 1) {
        switch (num) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 0:
                return '';
        }
    }
    if (index === 2) {
        switch (num) {
            case 1:
                return 'ten';
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
            case 0:
                return '';
        }
    }
    if (index === 3) {
        switch (num) {
            case 1:
                return 'one hundred';
            case 2:
                return 'two hundred';
            case 3:
                return 'three hundred';
            case 4:
                return 'four hundred';
            case 5:
                return 'five hundred';
            case 6:
                return 'six hundred';
            case 7:
                return 'seven hundred';
            case 8:
                return 'eight hundred';
            case 9:
                return 'nine hundred';
            case 0:
                return '';
        }
    }
}
