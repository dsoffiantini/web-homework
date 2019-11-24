import cases from 'jest-in-case';
import convertToRomanNumerals from '../src/utils/convertToRomanNumerals';

cases(
  'convertToRomanNumerals',
  opts => {
    expect(convertToRomanNumerals(opts.value)).toBe(opts.output);
  },
  [
    { value: 3000, output: 'MMM' },
    { value: 1900, output: 'MCM' },
    { value: 1700, output: 'MDCC' },
    { value: 1600, output: 'MDC' },
    { value: 700, output: 'DCC' },
    { value: 150, output: 'CL' },
    { value: 8, output: 'VIII' },
    { value: 4, output: 'IV' },
    { value: 3, output: 'III' }
  ]
);
