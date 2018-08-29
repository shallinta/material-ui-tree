import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styles from './style';

class MuiTreeLeaf extends React.Component {
  static defaultProps = {
    onClick: () => { },
    showButtons: false
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.string
    ]),
    showButtons: PropTypes.bool,
    actionButtons: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.string
    ]),
    text: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.string
    ]),
    textClassName: PropTypes.string
  };

  render() {
    const {
      classes,
      onClick,
      id,
      icon,
      showButtons,
      actionButtons,
      text,
      textClassName
    } = this.props;

    return (
      <ListItem
        dense
        button
        className={classes.treeNode}
        id={`tree-leaf-${id}`}
        onClick={onClick}
      >
        {
          icon && (
            <ListItemIcon>
              {icon}
            </ListItemIcon>
          )
        }
        <ListItemText
          inset
          primary={text}
          className={cn(classes.treeText, textClassName)}
        />
        {
          showButtons && (
            <ListItemSecondaryAction>
              {actionButtons}
            </ListItemSecondaryAction>
          )
        }
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MuiTreeLeaf);
