import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import FoldIcon from '@material-ui/icons/KeyboardArrowUp';
import UnfoldIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tree from './tree';
import TreeContext from './tree-context';
import useStyles from './style';

const MuiTree = (props) => {
  const classes = useStyles();
  const {
    className,
    title,
    data,
    ...rest
  } = props;

  return (
    <Paper className={cn(classes.paper, className)}>
      {title && (
        <Typography variant="h6" className={classes.caption}>
          {title}
        </Typography>
      )}
      {data && (
        <TreeContext.Provider value={rest}>
          <List dense component="div">
            <Tree data={data} depth={0} path={[]} />
          </List>
        </TreeContext.Provider>
      )}
    </Paper>
  );
};

MuiTree.defaultProps = {
  data: {},
  className: '',
  title: '',
  labelKey: 'label',
  valueKey: 'value',
  childrenKey: 'children',
  unfoldFirst: false,
  unfoldAll: false,
  pageSize: 20,
  foldIcon: <FoldIcon />,
  unfoldIcon: <UnfoldIcon />,
  loadMoreIcon: <MoreVertIcon />,
  actionsAlignRight: false,
  getActionsData: null,
  renderLabel: null,
  renderLoadMoreText: (page, pageSize, total) => `Loaded pages: ${(page + 1)} / Page size: ${pageSize} / Total: ${total}. Click here to load more...`,
  requestChildrenData: null
};

MuiTree.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  childrenKey: PropTypes.string,
  unfoldFirst: PropTypes.bool,
  unfoldAll: PropTypes.bool,
  pageSize: PropTypes.number,
  foldIcon: PropTypes.element,
  unfoldIcon: PropTypes.element,
  loadMoreIcon: PropTypes.element,
  actionsAlignRight: PropTypes.bool,
  getActionsData: PropTypes.func,
  renderLabel: PropTypes.func,
  renderLoadMoreText: PropTypes.func,
  requestChildrenData: PropTypes.func
};

export default MuiTree;
