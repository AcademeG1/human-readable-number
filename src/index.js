module.exports = function toReadable (number) {
    let str = number.toString()
    if (parseInt(str) === 0) {
        return 'zero'
    }
    massNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    massNumTy = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let resultWord = []
    let wordTime
    let masNumInt = str.split('').map(parseFloat)
    console.log(masNumInt)

    if (masNumInt[1] === 1) {
        masNumInt[2] += 10
    }

    if (str.length === 1) {

        if ((wordTime = massNum[masNumInt[0]])) {
            resultWord.push(wordTime)
        }
        console.log(resultWord)
        return resultWord.join('')
    }

    if (str.length === 2) {
        if (masNumInt[0] === 1) {
            masNumInt[1] += 10
        }

        if ((wordTime = massNumTy[masNumInt[0]])) {
            resultWord.push(wordTime)
        }
        console.log(resultWord)

        if ((wordTime = massNum[masNumInt[1]])) {
            resultWord.push(wordTime)
        }
        console.log(resultWord)
        return resultWord.join(' ')
    }

    if ((wordTime = massNum[masNumInt[0]])) {
        resultWord.push(wordTime + ' hundred')
    }
    console.log(resultWord)

    if ((wordTime = massNumTy[masNumInt[1]])) {
        resultWord.push(wordTime)
    }
    console.log(resultWord)

    if ((wordTime = massNum[masNumInt[2]])) {
        resultWord.push(wordTime)
    }
    console.log(resultWord)

    return resultWord.join(' ')
}
