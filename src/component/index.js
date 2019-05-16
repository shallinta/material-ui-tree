import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FoldIcon from '@material-ui/icons/AddCircleOutline';
import UnfoldIcon from '@material-ui/icons/RemoveCircleOutline';
import MuiTreeBranch from './tree-branch';
import styles from './style';

class MuiTree extends React.Component {
  static defaultProps = {
    className: '',
    labelName: 'label',
    labelKey: '',
    valueName: 'value',
    valueKey: '',
    childrenName: 'children',
    childrenKey: '',
    data: {},
    title: '',
    expandFirst: false,
    unfoldFirst: false,
    expandAll: false,
    unfoldAll: false,
    childrenCountPerPage: 20,
    pageSize: 0,
    actionsAlignRight: false,
    foldIcon: <FoldIcon />,
    unfoldIcon: <UnfoldIcon />,
    getActionsData: null,
    renderLabel: null,
    requestChildrenData: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    labelName: PropTypes.string,
    labelKey: PropTypes.string,
    valueName: PropTypes.string,
    valueKey: PropTypes.string,
    childrenName: PropTypes.string,
    childrenKey: PropTypes.string,
    data: PropTypes.object,
    title: PropTypes.string,
    expandFirst: PropTypes.bool,
    unfoldFirst: PropTypes.bool,
    expandAll: PropTypes.bool,
    unfoldAll: PropTypes.bool,
    childrenCountPerPage: PropTypes.number,
    pageSize: PropTypes.number,
    actionsAlignRight: PropTypes.bool,
    foldIcon: PropTypes.element,
    unfoldIcon: PropTypes.element,
    getActionsData: PropTypes.func,
    renderLabel: PropTypes.func,
    requestChildrenData: PropTypes.func
  };

  static childContextTypes = {
    tree: PropTypes.shape({
      labelName: PropTypes.string,
      valueName: PropTypes.string,
      childrenName: PropTypes.string,
      actionsAlignRight: PropTypes.bool,
      foldIcon: PropTypes.element,
      unfoldIcon: PropTypes.element,
      getActionsData: PropTypes.func,
      renderLabel: PropTypes.func,
      requestChildrenData: PropTypes.func,
      childrenCountPerPage: PropTypes.number
    })
  };

  getChildContext() {
    const {
      labelName,
      labelKey,
      valueName,
      valueKey,
      childrenName,
      childrenKey,
      expandFirst,
      unfoldFirst,
      expandAll,
      unfoldAll,
      actionsAlignRight,
      foldIcon,
      unfoldIcon,
      getActionsData,
      renderLabel,
      requestChildrenData,
      childrenCountPerPage,
      pageSize
    } = this.props;
    return {
      tree: {
        labelName: labelKey || labelName,
        valueName: valueKey || valueName,
        childrenName: childrenKey || childrenName,
        expandFirst: unfoldFirst || expandFirst,
        expandAll: unfoldAll || expandAll,
        actionsAlignRight,
        foldIcon,
        unfoldIcon,
        getActionsData,
        renderLabel,
        requestChildrenData,
        childrenCountPerPage: pageSize || childrenCountPerPage
      }
    };
  }

  componentWillMount() {
    const {
      labelName,
      valueName,
      childrenName,
      expandFirst,
      expandAll,
      childrenCountPerPage
    } = this.props;
    if (labelName !== 'label') {
      this.log('labelName', 'labelKey');
    }
    if (valueName !== 'value') {
      this.log('valueName', 'valueKey');
    }
    if (childrenName !== 'children') {
      this.log('childrenName', 'childrenKey');
    }
    if (expandFirst) {
      this.log('expandFirst', 'unfoldFirst');
    }
    if (expandAll) {
      this.log('expandAll', 'unfoldAll');
    }
    if (childrenCountPerPage !== 20) {
      this.log('childrenCountPerPage', 'pageSize');
    }
  }

  log(key, nextKey) {
    console.warn(`The property \`${key}\` is deprecated, and it will be completely removed at next major version. please use \`${nextKey}\` instead.`);
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
