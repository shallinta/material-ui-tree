import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles, ListItem, ListItemIcon, ListItemText, Button, IconButton, Tooltip } from 'material-ui';
import { AddCircleOutline as AddIcon, RemoveCircleOutline as RemoveIcon } from 'material-ui-icons';
import styles from './style';

class MuiTreeLeaf extends React.Component {
  static defaultProps = {
    onClick: () => {},
    expand: false
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    layer: PropTypes.number.isRequired,
    chdIndex: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    expand: PropTypes.bool
  };

  static contextTypes = {
    tree: PropTypes.shape({
      labelName: PropTypes.string,
      valueName: PropTypes.string,
      actionsAlignRight: PropTypes.bool,
      getActionsData: PropTypes.func,
      renderLabel: PropTypes.func
    })
  };

  state = {
    showButtons: true
  };

  getActions(data) {
    const { getActionsData, actionsAlignRight } = this.context.tree;
    const { classes, layer, chdIndex, expand } = this.props;
    if (getActionsData && typeof getActionsData === 'function') {
      const actionsData = getActionsData(data, layer, chdIndex, expand);
      if (actionsData && actionsData.length) {
        return actionsData.map((actionItem, actionIndex) => {
          const {
            icon,
            label,
            hint,
            onClick = () => {},
            style = {},
            ...rest
          } = actionItem;
          const useStyle = Object.assign({ marginLeft: 16 }, style);
          let ButtonComponent = null;
          if (label) {
            ButtonComponent = (
              <Button size="small">
                { icon ? React.cloneElement(icon, { style: { width: 12, height: 12 } }) : null }
                { label }
              </Button>
            );
          } else if (icon) {
            ButtonComponent = (
              <IconButton>
                { icon }
              </IconButton>
            );
          }
          if (ButtonComponent) {
            ButtonComponent = React.cloneElement(ButtonComponent, {
              color: 'primary',
              onClick: e => this.handleButtonClick(e, onClick),
              className: classes.button,
              style: useStyle,
              ...rest
            });
          }
          let WrappedButtonComponent = ButtonComponent;
          if (WrappedButtonComponent && hint) {
            WrappedButtonComponent = (
              <Tooltip
                title={hint}
                placement={actionsAlignRight ? 'left' : 'right'}
              >
                { ButtonComponent }
              </Tooltip>
            );
          }
          return WrappedButtonComponent ? React.cloneElement(WrappedButtonComponent, {
            key: `fab-list-item-${actionIndex + 1}`
          }) : null;
        });
      }
    }
    return null;
  }

  getLabel() {
    const { data, expand } = this.props;
    const { labelName, renderLabel } = this.context.tree;
    if (renderLabel && typeof renderLabel === 'function') {
      return renderLabel(data, expand);
    }
    return data[labelName];
  }

  handleButtonClick = (e, onClick) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  render() {
    const {
      classes,
      data,
      onClick,
      expand
    } = this.props;
    const {
      valueName,
      actionsAlignRight
    } = this.context.tree;

    return (
      <ListItem
        dense
        button
        className={classes.treeNode}
        id={`tree-leaf-${data[valueName]}`}
        onClick={onClick}
      >
        <ListItemIcon>
          {
            expand
              ? (<RemoveIcon className={classes.treeIcon} />)
              : (<AddIcon className={classes.treeIcon} />)
          }
        </ListItemIcon>
        <ListItemText
          inset
          primary={this.getLabel()}
          className={cn(classes.treeText, { [classes.treeTextFlex]: actionsAlignRight })}
        />
        {
          this.state.showButtons
            ? this.getActions(data)
            : null
        }
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MuiTreeLeaf);
