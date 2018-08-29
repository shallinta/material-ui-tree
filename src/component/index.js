import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import MuiTreeBranch from './tree-branch';
import styles from './style';

class MuiTree extends React.Component {
  static defaultProps = {
    className: '',
    labelName: 'label',
    valueName: 'value',
    childrenName: 'children',
    data: {},
    title: '',
    expandFirst: false,
    expandAll: false,
    childrenCountPerPage: 20,
    actionsAlignRight: false,
    getActionsData: null,
    renderLabel: null,
    perPage: false,
    renderLabelIcon: (leafData, childrenName, expand) => expand
      ? ( <RemoveIcon /> )
      : ( <AddIcon /> ),
    renderLoadMoreText: (childrenPage, childrenCountPerPage, childrenLength) => (`${(childrenPage + 1) * childrenCountPerPage}/${childrenLength} shown， click to load next items...`),
    renderLoadLessText: (childrenPage, childrenCountPerPage, childrenLength) => (`${(childrenPage) * childrenCountPerPage}/${(childrenPage + 1) * childrenCountPerPage} shown,click to load previous items...`),
    requestChildrenData: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    labelName: PropTypes.string,
    valueName: PropTypes.string,
    childrenName: PropTypes.string,
    data: PropTypes.object,
    title: PropTypes.string,
    expandFirst: PropTypes.bool,
    expandAll: PropTypes.bool,
    childrenCountPerPage: PropTypes.number,
    actionsAlignRight: PropTypes.bool,
    getActionsData: PropTypes.func,
    renderLabel: PropTypes.func,
    perPage: PropTypes.bool,
    renderLabelIcon: PropTypes.func,
    renderLoadMoreText: PropTypes.func,
    renderLoadLessText: PropTypes.func,
    requestChildrenData: PropTypes.func
  };

  static childContextTypes = {
    tree: PropTypes.shape({
      labelName: PropTypes.string,
      valueName: PropTypes.string,
      childrenName: PropTypes.string,
      actionsAlignRight: PropTypes.bool,
      getActionsData: PropTypes.func,
      renderLabel: PropTypes.func,
      perPage: PropTypes.bool,
      renderLabelIcon: PropTypes.func,
      renderLoadMoreText: PropTypes.func,
      renderLoadLessText: PropTypes.func,
      requestChildrenData: PropTypes.func,
      childrenCountPerPage: PropTypes.number
    })
  };

  getChildContext() {
    const {
      labelName,
      valueName,
      childrenName,
      expandFirst,
      expandAll,
      actionsAlignRight,
      getActionsData,
      renderLabel,
      perPage,
      renderLabelIcon,
      renderLoadMoreText,
      renderLoadLessText,
      requestChildrenData,
      childrenCountPerPage
    } = this.props;
    return {
      tree: {
        labelName,
        valueName,
        childrenName,
        expandFirst,
        expandAll,
        actionsAlignRight,
        getActionsData,
        renderLabel,
        perPage,
        renderLabelIcon,
        renderLoadMoreText,
        renderLoadLessText,
        requestChildrenData,
        childrenCountPerPage
      }
    };
  }

  render() {
    const {
      classes,
      className,
      data,
      title
    } = this.props;

    return (
      <Paper className={cn(classes.paper, className)}>
        {
          title
            ? (
              <Typography variant='caption' className={classes.caption}>{title}</Typography>
            )
            : null
        }
        <MuiTreeBranch data={data} expand layer={0} />
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MuiTree);
export getTreeLeafDataByIndexArray from '../utils/getTreeLeafDataByIndexArray';
