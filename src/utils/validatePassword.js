export const validatePassword = (v) => {
  let error;
  if (!v) {
    error = "Required";
  }
  if (v) {
    let i;
    for (i = 0; i < v.length; i++) {
      if (v[i] === " ") {
        error = "Space is not allowed";
      }
    }
  }
  return error;
};
