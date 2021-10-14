import { validate } from 'class-validator';
import { isValidCPF, ValidateCPF } from './is-valid-cpf';

describe('IsValidCpf', () => {
  const validCpf: string = '750.880.740-50';
  const invalidCpf: string = '000.000.000-00';

  class TestCpf {
    @isValidCPF()
    cpf: string;
  }
  const validObject = new TestCpf();
  validObject.cpf = validCpf;

  const invalidObject = new TestCpf();
  invalidObject.cpf = invalidCpf;

  it('ValidateCPF should to equal true', () => {
    expect(ValidateCPF(validCpf)).toEqual(true);
  });

  it('ValidateCPF should to equal false', () => {
    expect(ValidateCPF(invalidCpf)).toEqual(false);
  });

  it('isValidCpf should to valid', async () => {
    const result = await validate(validObject);
    expect(result.length).toEqual(0);
  });

  it('isValidCpf should to invalid', async () => {
    const result = await validate(invalidObject);
    expect(result.length).toEqual(1);
  });
});
