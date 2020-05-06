import React, { useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useTheme } from '@material-ui/core/styles';
import TreeContext from './tree-context';
import useStyles from './style';

const TreeNode = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(TreeContext);
  const {
    foldIcon,
    unfoldIcon,
    labelKey,
    renderLabel,
    actionsAlignRight,
    getActionsData
  } = context;
  const {
    data,
    unfoldStatus,
    depth,
    path,
    toggleFoldStatus,
    onClick
  } = props;

  const getIcon = useCallback(
    icon => React.cloneElement(icon, { className: classes.treeIcon }),
    [classes]
  );

  const getLabel = useCallback(() => {
    if (renderLabel && typeof renderLabel === 'function') {
      return renderLabel(data, unfoldStatus);
    }
    return data[labelKey];
  }, [renderLabel, labelKey, data, unfoldStatus]);

  const getBtnClickHandler = useCallback(
    onBtnClick => (e) => {
      e.preventDefault();
      e.stopPropagation();
      onBtnClick();
    },
    []
  );

  const actions = useMemo(() => {
    if (getActionsData && typeof getActionsData === 'function') {
      const actionsData = [].concat(
        getActionsData(data, path, unfoldStatus, toggleFoldStatus) || []
      );
      if (actionsData && actionsData.length) {
        return actionsData.map((action, actIndex) => {
          const {
            icon,
            label,
            hint,
            style = {},
            onClick: onBtnClick = () => { },
            ...rest
          } = action;
          const usedStyle = Object.assign(
            { marginLeft: theme.spacing(2) },
            style
          );
          let btnComp = null;
          if (label) {
            btnComp = (
              <Button size="small">
                {icon && React.cloneElement(icon, { className: classes.actionIcon })}
                {label}
              </Button>
            );
          } else if (icon) {
            btnComp = <IconButton>{icon}</IconButton>;
          }
          if (btnComp) {
            btnComp = React.cloneElement(btnComp, {
              color: 'primary',
              className: classes.button,
              style: usedStyle,
              onClick: getBtnClickHandler(onBtnClick),
              ...rest
            });
            if (hint) {
              btnComp = (
                <Tooltip title={hint} placement={actionsAlignRight ? 'left' : 'right'}>
                  {btnComp}
                </Tooltip>
              );
            }
          }
          return btnComp && React.cloneElement(btnComp, {
            key: `tree-node-${path.join('-')}-action-${action.id || action.name || action.key || actIndex + 1}`
          });
        });
      }
    }
    return null;
  }, [
    getActionsData,
    actionsAlignRight,
    data,
    path,
    unfoldStatus,
    toggleFoldStatus,
    theme,
    classes,
    getBtnClickHandler
  ]);

  return (
    <ListItem
      dense
      button
      onClick={onClick}
      className={classes.item}
      style={{ marginLeft: depth * theme.spacing(3) }}
    >
      <ListItemIcon className={classes.treeIconContainer}>
        {unfoldStatus ? getIcon(unfoldIcon) : getIcon(foldIcon)}
      </ListItemIcon>
      <ListItemText
        primary={getLabel()}
        className={cn(classes.treeText, {
          [classes.treeTextFlex]: actionsAlignRight
        })}
      />
      {actions}
    </ListItem>
  );
};

TreeNode.propTypes = {
  data: PropTypes.object.isRequired,
  unfoldStatus: PropTypes.bool.isRequired,
  depth: PropTypes.number.isRequired,
  path: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleFoldStatus: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TreeNode;
