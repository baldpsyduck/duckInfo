export const getArrayDiff = <T>(a: T[], b: T[]) => {
  return a.filter(function (i) {
    return b.indexOf(i) < 0;
  });
};
