import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/styles';
import TreeNode from './tree-node';
import TreeContext from './tree-context';
import useStyles from './style';

const Tree = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(TreeContext);
  const {
    unfoldAll,
    unfoldFirst,
    valueKey,
    childrenKey,
    pageSize,
    loadMoreIcon,
    renderLoadMoreText,
    requestChildrenData
  } = context;
  const { data, depth, path } = props;
  const [unfoldStatus, setUnfoldStatus] = useState(
    unfoldAll || (depth === 0 ? unfoldFirst : false)
  );
  const children = data[childrenKey] || [];
  const pageCount = Math.ceil(children.length / pageSize);
  const [page, setPage] = useState(0);

  const toggleFoldStatus = useCallback(() => setUnfoldStatus(!unfoldStatus), [
    unfoldStatus,
    setUnfoldStatus
  ]);

  const renderChildren = useCallback(() => {
    const total = (page + 1) * pageSize;
    const usedChildren = children.slice(0, total);
    return usedChildren.map((child, index) => (
      <Tree
        key={`tree-branch-${child[valueKey]}`}
        data={child}
        depth={depth + 1}
        path={path.concat(index)}
      />
    ));
  }, [valueKey, children, page, pageSize, depth, path]);

  const getIcon = useCallback(
    icon => React.cloneElement(icon, { className: cn(classes.treeIcon, classes.treeIconButton) }),
    [classes]
  );

  const loadNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page, setPage]);

  const handleClick = useCallback(() => {
    if (unfoldStatus) {
      // Was unfold, is about to fold.
      toggleFoldStatus();
    } else if (children.length > 0) {
      // Was fold, is about to unfold.
      // Has children, and unfold directly.
      toggleFoldStatus();
    } else if (requestChildrenData && typeof requestChildrenData === 'function') {
      // Was fold, is about to unfold.
      // No children currently,
      // request children data if the `requestChildrenData` method provided.
      requestChildrenData(data, path, toggleFoldStatus);
    } else {
      // Was fold, is about to unfold.
      // No children currently and in the future..
      toggleFoldStatus();
    }
  }, [
    unfoldStatus,
    toggleFoldStatus,
    children,
    requestChildrenData,
    data,
    path
  ]);

  return (
    <>
      <TreeNode
        data={data}
        unfoldStatus={unfoldStatus}
        depth={depth}
        path={path}
        toggleFoldStatus={toggleFoldStatus}
        onClick={handleClick}
      />
      <Collapse in={unfoldStatus} unmountOnExit>
        {renderChildren()}
        {unfoldStatus && page + 1 < pageCount && (
          <ListItem
            dense
            button
            onClick={loadNextPage}
            className={classes.item}
            style={{ marginLeft: (depth + 1) * theme.spacing(3) }}
          >
            <ListItemIcon className={classes.treeIconContainer}>
              {getIcon(loadMoreIcon)}
            </ListItemIcon>
            <ListItemText
              primary={renderLoadMoreText(page, pageSize, children.length)}
              className={cn(classes.treeText, classes.treeTextButton)}
            />
          </ListItem>
        )}
      </Collapse>
    </>
  );
};

Tree.propTypes = {
  data: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  path: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Tree;
