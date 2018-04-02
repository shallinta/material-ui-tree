import React from 'react';
import PropTypes from 'prop-types';
import MuiTreeBranch from './tree-branch';

const TreeBranchChildrenPage = (props, context) => {
  const {
    data,
    expand,
    layer,
    chdIndex
  } = props;
  const { valueName } = context.tree;
  return (
    <React.Fragment>
      {
        data.map((item, nextChdIndex) => (
          <MuiTreeBranch
            key={`tree-branch-${item[valueName]}`}
            expand={expand}
            data={item}
            layer={layer + 1}
            chdIndex={chdIndex.concat(nextChdIndex)}
          />
        ))
      }
    </React.Fragment>
  );
};

TreeBranchChildrenPage.propTypes = {
  data: PropTypes.array.isRequired,
  expand: PropTypes.bool.isRequired,
  layer: PropTypes.number.isRequired,
  chdIndex: PropTypes.array.isRequired
};

TreeBranchChildrenPage.contextTypes = {
  tree: PropTypes.shape({
    valueName: PropTypes.string
  })
};

export default TreeBranchChildrenPage;
