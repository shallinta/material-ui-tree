import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MuiTreeLeaf from './tree-leaf';
import styles from './style';

class MuiTreeLeafData extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    chdIndex: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onPrimaryClick: PropTypes.func,
    expand: PropTypes.bool,
    doExpand: PropTypes.func.isRequired
  };

  static contextTypes = {
    tree: PropTypes.shape({
      labelName: PropTypes.string,
      valueName: PropTypes.string,
      actionsAlignRight: PropTypes.bool,
      getActionsData: PropTypes.func,
      renderLabel: PropTypes.func,
      renderLabelIcon: PropTypes.func
    })
  };

  static defaultProps = {
    onClick: () => { },
    onPrimaryClick: () => { },
    expand: false
  };

  state = {
    showButtons: true
  };

  getActions(data) {
    const { getActionsData, actionsAlignRight } = this.context.tree;
    const {
      classes,
      chdIndex,
      expand,
      doExpand
    } = this.props;
    if (getActionsData && typeof getActionsData === 'function') {
      const actionsData = getActionsData(data, chdIndex, expand, doExpand);
      if (actionsData && actionsData.length) {
        return actionsData.map((actionItem, actionIndex) => {
          const {
            icon,
            label,
            hint,
            onClick = () => { },
            style = {},
            ...rest
          } = actionItem;
          const useStyle = Object.assign({ marginLeft: 16 }, style);
          let ButtonComponent = null;
          if (label) {
            ButtonComponent = (
              <Button size='small'>
                {
                  icon
                    ? React.cloneElement(icon, {
                      style: { width: 12, height: 12 }
                    })
                    : null
                }
                {label}
              </Button>
            );
          } else if (icon) {
            ButtonComponent = <IconButton>{icon}</IconButton>;
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
                {ButtonComponent}
              </Tooltip>
            );
          }
          return WrappedButtonComponent
            ? React.cloneElement(WrappedButtonComponent, {
              key: `fab-list-item-${actionIndex + 1}`
            })
            : null;
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

  getLabelIcon() {
    const { data, expand, classes } = this.props;
    const { renderLabelIcon, childrenName } = this.context.tree;
    if (renderLabelIcon && typeof renderLabelIcon === 'function') {
      const LabelIconElement = renderLabelIcon(data, childrenName, expand);

      return LabelIconElement
        && React.cloneElement(LabelIconElement, {
          className: classes.treeIcon
        });
    }

    return null;
  }

  handleButtonClick = (e, onClick) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  render() {
    const {
      classes, data, onClick, onPrimaryClick
    } = this.props;
    const { valueName, actionsAlignRight } = this.context.tree;

    return (
      <MuiTreeLeaf
        onPrimaryClick={onPrimaryClick}
        onClick={onClick}
        id={`tree-leaf-${data[valueName]}`}
        icon={this.getLabelIcon()}
        showButtons={this.state.showButtons}
        actionButtons={this.getActions(data)}
        text={this.getLabel()}
        textClassName={cn({
          [classes.treeTextFlex]: actionsAlignRight
        })}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(MuiTreeLeafData);
