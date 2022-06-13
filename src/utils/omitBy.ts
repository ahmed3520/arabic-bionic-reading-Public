export default <T>(
  obj: T,
  omitFilter: (value: T[keyof typeof obj]) => boolean
) => {
  // eslint-disable-next-line 
  const keyList = Object.keys(obj) as (keyof typeof obj)[];
  return keyList.reduce((obj, key) => {
    if (omitFilter(obj[key])) {
      delete obj[key];
    }

    return obj;
  }, obj);
};
