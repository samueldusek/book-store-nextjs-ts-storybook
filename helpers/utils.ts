export const getRandInteger = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const shuffleArray = (array: any[]) => {
  return array.sort(function (a, b) {
    return 0.5 - Math.random();
  });
};
