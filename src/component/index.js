// import React from 'react';
// import PropTypes from 'prop-types';
// import cn from 'classnames';
// import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import MuiTreeBranch from './tree-branch';
// import styles from './style';
//
// export getTreeLeafDataByIndexArray from '../utils/getTreeLeafDataByIndexArray';
//
// class MuiTree extends React.Component {
//   static defaultProps = {
//     className: '',
//     labelName: 'label',
//     valueName: 'value',
//     childrenName: 'children',
//     data: {},
//     title: '',
//     expandFirst: false,
//     expandAll: false,
//     actionsAlignRight: false,
//     getActionsData: null,
//     renderLabel: null,
//     requestChildrenData: null,
//     childrenCountPerPage: 50
//   };
//
//   static propTypes = {
//     classes: PropTypes.object.isRequired,
//     className: PropTypes.string,
//     labelName: PropTypes.string,
//     valueName: PropTypes.string,
//     childrenName: PropTypes.string,
//     data: PropTypes.object,
//     title: PropTypes.string,
//     expandFirst: PropTypes.bool,
//     expandAll: PropTypes.bool,
//     actionsAlignRight: PropTypes.bool,
//     getActionsData: PropTypes.func,
//     renderLabel: PropTypes.func,
//     requestChildrenData: PropTypes.func,
//     childrenCountPerPage: PropTypes.number
//   };
//
//   static childContextTypes = {
//     tree: PropTypes.shape({
//       labelName: PropTypes.string,
//       valueName: PropTypes.string,
//       childrenName: PropTypes.string,
//       actionsAlignRight: PropTypes.bool,
//       getActionsData: PropTypes.func,
//       renderLabel: PropTypes.func,
//       requestChildrenData: PropTypes.func,
//       childrenCountPerPage: PropTypes.number
//     })
//   };
//
//   getChildContext() {
//     const {
//       labelName,
//       valueName,
//       childrenName,
//       expandFirst,
//       expandAll,
//       actionsAlignRight,
//       getActionsData,
//       renderLabel,
//       requestChildrenData,
//       childrenCountPerPage
//     } = this.props;
//     return {
//       tree: {
//         labelName,
//         valueName,
//         childrenName,
//         expandFirst,
//         expandAll,
//         actionsAlignRight,
//         getActionsData,
//         renderLabel,
//         requestChildrenData,
//         childrenCountPerPage
//       }
//     };
//   }
//
//   render() {
//     const {
//       classes,
//       className,
//       data,
//       title
//     } = this.props;
//
//     return (
//       <Paper className={cn(classes.paper, className)}>
//         {
//           title
//             ? (
//               <Typography variant="caption" className={classes.caption}>{title}</Typography>
//             )
//             : null
//         }
//         <MuiTreeBranch data={data} expand layer={0} />
//       </Paper>
//     );
//   }
// }
//
// export default withStyles(styles, { withTheme: true })(MuiTree);

console.log('Hello world!');
