const getNodeDataByPath = (data, path, childrenKey = 'children') => {
  const { length } = path;
  let p = 0;
  let r = data;
  while (p < length) {
    r = r[childrenKey][path[p]];
    p += 1;
  }
  return r;
};

export const withChildrenKey = key => (data, path) => getNodeDataByPath(data, path, key);

export default getNodeDataByPath;
