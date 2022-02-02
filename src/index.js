module.exports = function toReadable(number) {

    if (number === 0) return 'zero'

    const number1_20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number < 20) return number1_20[number]

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ((20 <= number) && (number <= 99)) {
        const ten = Math.trunc(number / 10);
        const tenUnit = Math.round(((number / 10) - ten) * 10);
        if ((number % 10 === 0) && number < 100) return tens[ten];
        return tens[ten] + " " + number1_20[tenUnit];
    }

    if (100 <= number) {
        const hundred = Math.trunc(number / 100);
        if (number % 100 === 0) return number1_20[hundred] + ' hundred'
        const hundredIndex = Math.round(((number / 100) - hundred) * 100);
        if (hundredIndex < 20) return (number1_20[hundred] + ' hundred ' + number1_20[hundredIndex])
        const hundredTen = Number((((number / 100) - hundred) * 10).toFixed(2));
        if (number % 10 === 0) return number1_20[hundred] + ' hundred ' + tens[hundredTen]
        const hundredUnit = Number((hundredTen - Math.floor(hundredTen)) * 10).toFixed(0);
        return number1_20[hundred] + ' hundred ' + tens[Math.floor(hundredTen)] + " " + number1_20[hundredUnit]
    }
}
