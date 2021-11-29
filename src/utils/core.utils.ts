export const nop = () => {};

export const nil = () => null;

export const nerr = (errText = 'Error!') => {
  throw new Error(errText);
};
