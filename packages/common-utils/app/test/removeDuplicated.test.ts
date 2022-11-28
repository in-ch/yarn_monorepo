import removeDuplicated from '../removeDuplicated';

describe('remove Duplicated test', () => {
  it('case 1:', () => {
    const data = ['바나나', '사과', '사과', '키위'];
    const actual = removeDuplicated(data);

    const expectedValue = ['바나나', '사과', '키위'];

    expect(actual).toStrictEqual(expectedValue);
  });

  it('case 2:', () => {
    const data = ['바나나', '사과2', '사과', '키위'];
    const actual = removeDuplicated(data);

    const expectedValue = ['바나나', '사과2', '사과', '키위'];

    expect(actual).toStrictEqual(expectedValue);
  });

  it('case 3:', () => {
    const data = ['바나나', '바나나', '사과', '키위', '키위'];
    const actual = removeDuplicated(data);

    const expectedValue = ['바나나', '사과', '키위'];

    expect(actual).toStrictEqual(expectedValue);
  });
});
