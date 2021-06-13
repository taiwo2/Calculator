import calculate from '../../logic/calculate';

describe('tests for calculate', () => {
  test('should clean display mirror when "AC" pressed', () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };

    const newData = calculate(data, 'AC');
    expect(newData).toEqual(data);
  });

  test('should show btnName when the operators given', () => {
    const data = { total: '', next: '', operation: '+' };
    const newData = calculate(data, '+');
    expect(newData.operation).toEqual('+');
    expect(newData.next).toEqual('');
  });

  test('should show minus or plus number when "+/-" pressed', () => {
    const data = { total: null, next: '', operation: 'x' };
    const newData = calculate(data, '+/-');

    expect(newData.total).toEqual(0);
  });

  test('should calculate output when "=" pressed', () => {
    const data = { total: 7, next: 5, operation: 'x' };
    const newData = calculate(data, '=');

    expect(newData.total).toEqual('35');
    expect(newData.next).toBeFalsy();
    expect(newData.operation).toBeFalsy();
  });

  test('should show total if there is no operation', () => {
    const data = { total: 7, next: 5, operation: '' };
    const newData = calculate(data, '');

    expect(newData).toBeFalsy();
  });

  test('should show next if there is  operation', () => {
    const data = { total: '7', next: '5', operation: '/' };
    const newData = calculate(data, '/');

    expect(newData).toBeFalsy();
  });
});
