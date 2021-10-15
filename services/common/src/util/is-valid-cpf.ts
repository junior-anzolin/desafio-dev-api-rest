import { registerDecorator, ValidationOptions } from 'class-validator';
import { RemoveMaskCPF } from './remove-mask-cpf';

export const ValidateCPF = (number: string) => {
  // eslint-disable-next-line prettier/prettier
  number = RemoveMaskCPF(number);
  const invalidCpfs: string[] = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];
  let sum;
  let rest;
  sum = 0;
  if (invalidCpfs.includes(number)) return false;

  for (let i: number = 1; i <= 9; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(number.substring(9, 10))) return false;

  sum = 0;
  for (let i: number = 1; i <= 10; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(number.substring(10, 11))) return false;
  return true;
};

export function isValidCPF(
  validationOptions: ValidationOptions = { message: 'CPF inválido' },
) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isValidCPF',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) return false;
          return ValidateCPF(value.toString());
        },
      },
    });
  };
}
