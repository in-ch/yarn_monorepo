/**
 * @param {string[]} value string 배열
 * @returns {string[]} 중복 제거 후 배열 리턴
 */

const removeDuplicated = (value: string[]): string[] => {
  const dupArr = [...value];
  const setArr = new Set<string>(dupArr);
  return [...setArr];
};

export default removeDuplicated;
