const numberToWords = (num: number): string => {
  if (num === 0) {
    return 'Zero';
  }

  const ones = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];
  let result = '';
  let index = 0;

  while (num > 0) {
    if (num % 1000 != 0) {
      let groupResult = '';
      let part = num % 1000;

      if (part >= 100) {
        groupResult = ones[Math.floor(part / 100)] + ' Hundred ';
        part %= 100;
      }

      if (part >= 20) {
        groupResult += tens[Math.floor(part / 10)] + ' ';
        part %= 10;
      }

      if (part > 0) {
        groupResult += ones[part] + ' ';
      }

      groupResult += thousands[index] + ' ';
      result = groupResult + result;
    }
    num = Math.floor(num / 1000);
    index++;
  }

  return result.trim();
};
