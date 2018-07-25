const getTreeLeafDataByIndexArray = (data, indexArray, childrenName = 'children') => {
  const { length } = indexArray;
  let p = 0;
  let r = data;
  while (p < length) {
    r = r[childrenName][indexArray[p]];
    p += 1;
  }
  return r;
};

const withChildrenName =
  childrenName =>
    (data, indexArray) =>
      getTreeLeafDataByIndexArray(data, indexArray, childrenName);

export {
  withChildrenName
};
export default getTreeLeafDataByIndexArray;
