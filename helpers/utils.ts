export const getRandInteger = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const shuffleArray = (array: any[]) => {
  return array.sort(function (a, b) {
    return 0.5 - Math.random();
  });
};

interface Sizes {
  readonly [index: string]: string;
}

const sizes: Sizes = {
  xs: "614.98px",
  sm: "767.98px",
  md: "1060px",
  lg: "1199.98px",
  xl: "1600px",
};

export const getSizeMedia = {
  down(size: string): string {
    return `@media (max-width: ${sizes[size]})`;
  },
};

export const getSize: (size: string) => string = (size) => {
  return sizes[size];
};
