module.exports = function toReadable (number) {
  let UpToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] ;
  let UpToTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decimals = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number == 0) return UpToTen[number];

  if (number < 10) return UpToTen[number];

  if (number < 20 && number != 10) return UpToTwenty[number % 10 - 1];

  if (number < 100 && number % 10 == 0) return decimals[number / 10 - 1];

  if (number < 100 && number % 10 != 0) {
    return decimals[Math.floor(number / 10 - 1)] + ' ' + UpToTen[number % 10];
  } else {
    let hundred = UpToTen[Math.floor(number / 100)] + ' hundred';

    let ost = number % 100;

    if (number % 100 == 0) {
      return hundred;
    }else {
      if (ost < 10) return hundred + ' ' + UpToTen[ost];

      if (ost < 20 && ost != 10) return hundred + ' ' + UpToTwenty[ost % 10 -1];

      if (ost < 100 && ost % 10 == 0) return hundred + ' ' + decimals[ost / 10 - 1];

      if (ost < 100 && ost % 10 != 0) {
        return hundred + ' ' + decimals[Math.floor(ost / 10 - 1)] + ' ' + UpToTen[ost % 10];
      } else {
        return 'unknown number';
      }
    }
  }
}