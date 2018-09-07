import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MuiTreeLeaf from './tree-leaf';
import MuiTreeLeafData from './tree-leaf-data';
import TreeBranchChildrenPage from './tree-branch-children-page';
import styles from './style';

class MuiTreeBranch extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    layer: PropTypes.number.isRequired,
    className: PropTypes.string,
    data: PropTypes.any,
    expand: PropTypes.bool,
    chdIndex: PropTypes.array
  };

  static contextTypes = {
    tree: PropTypes.shape({
      childrenName: PropTypes.string,
      expandFirst: PropTypes.bool,
      expandAll: PropTypes.bool,
      requestChildrenData: PropTypes.func,
      childrenCountPerPage: PropTypes.number,
      perPage: PropTypes.bool
    })
  };

  static defaultProps = {
    className: '',
    data: {},
    expand: false,
    chdIndex: []
  };

  constructor(props, context) {
    super(props, context);
    const { layer } = props;
    const { expandFirst, expandAll } = context.tree;
    this.state = {
      expand: expandAll || (layer === 0 ? expandFirst : false),
      childrenPage: 0
    };
  }

  state = {
    expand: false,
    childrenPage: 0
  };

  getChildren() {
    const { data } = this.props;
    const { childrenName } = this.context.tree;
    return (typeof data[childrenName] === 'string' ? data[data[childrenName]] : data[childrenName]) || [];
  }

  getLoadMoreText() {
    const { childrenPage } = this.state;
    const { renderLoadMoreText, childrenCountPerPage } = this.context.tree;
    const children = this.getChildren();
    if (renderLoadMoreText && typeof renderLoadMoreText === 'function') {
      const LoadMoreTextElement =
        renderLoadMoreText(childrenPage, childrenCountPerPage, children.length);

      return LoadMoreTextElement;
    }

    return null;
  }

  getLoadLessText() {
    const { childrenPage } = this.state;
    const { renderLoadLessText, childrenCountPerPage } = this.context.tree;
    const children = this.getChildren();
    if (renderLoadLessText && typeof renderLoadLessText === 'function') {
      const LoadLessTextElement =
        renderLoadLessText(childrenPage, childrenCountPerPage, children.length);

      return LoadLessTextElement;
    }

    return null;
  }

  handleClick = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    const { expand } = this.state;
    if (!expand) { // 即将展开
      if (this.getChildren().length === 0) { // 没有子节点
        const { requestChildrenData } = this.context.tree;
        const { data, chdIndex } = this.props;
        if (requestChildrenData && typeof requestChildrenData === 'function') { // 通过配置的方法请求数据
          requestChildrenData(data, chdIndex, this.doExpand);
        } else { // 无子节点
          this.doExpand();
        }
      } else { // 有子节点 直接展开
        this.doExpand();
      }
    } else { // 将收起
      this.doExpand();
    }
  };

  handlePrimaryClick = (event) => {
    const { onPrimaryClick } = this.context.tree;
    if (onPrimaryClick && typeof onPrimaryClick === 'function') {
      const { data, chdIndex } = this.props;
      onPrimaryClick(data, chdIndex, this.doExpand);
    } else {
      this.handleClick(event);
    }
  }

  doExpand = () => {
    this.setState(({ expand }) => ({
      expand: !expand
    }));
  };

  loadMore = () => {
    this.setState(({ childrenPage }) => ({
      childrenPage: childrenPage + 1
    }));
  };

  loadLess = () => {
    this.setState(({ childrenPage }) => ({
      childrenPage: childrenPage - 1
    }));
  };

  renderChildrenByPage(page) {
    const { layer, chdIndex } = this.props;
    const { childrenCountPerPage } = this.context.tree;
    const children = this.getChildren();
    const startIndex = page * childrenCountPerPage;
    let endIndex = (page + 1) * childrenCountPerPage;
    endIndex = endIndex > children.length ? children.length : endIndex;
    const useChildren = children.slice(startIndex, endIndex);
    return (
      <TreeBranchChildrenPage
        key={`tree-branch-page-${page}`}
        data={useChildren}
        expand={this.state.expand}
        layer={layer}
        chdIndex={chdIndex}
        startIndex={startIndex}
      />
    );
  }

  renderChildren = () => {
    const { childrenPage } = this.state;
    const { perPage } = this.context.tree;
    if (perPage) {
      return this.renderChildrenByPage(childrenPage);
    }
    const r = [];
    for (let index = 0; index <= childrenPage; index++) {
      r.push(this.renderChildrenByPage(index));
    }
    return r;
  };

  render() {
    const {
      classes,
      className,
      data,
      expand,
      layer,
      chdIndex
    } = this.props;
    const { childrenPage } = this.state;
    const { childrenCountPerPage, perPage } = this.context.tree;
    const children = this.getChildren();
    const pageCount = Math.ceil(children.length / childrenCountPerPage);

    return (
      <Collapse in={expand} unmountOnExit>
        <List
          dense
          component='div'
          className={className}
          style={{ paddingLeft: layer > 0 ? 32 : 0 }}
        >
          <MuiTreeLeafData
            data={data}
            onPrimaryClick={this.handlePrimaryClick}
            onClick={this.handleClick}
            expand={this.state.expand}
            layer={layer}
            chdIndex={chdIndex}
            doExpand={this.doExpand}
          />
          {
            this.state.expand && perPage && childrenPage > 0
              ? (
                <MuiTreeLeaf
                  onClick={this.loadLess}
                  id='load-less'
                  icon={
                    <MoreVertIcon
                      className={cn(classes.treeIcon, classes.treeIconButton)}
                    />
                  }
                  text={this.getLoadLessText()}
                />
              )
              : null
          }
          {this.renderChildren()}
          {
            this.state.expand && childrenPage + 1 < pageCount
              ? (
                <MuiTreeLeaf
                  onClick={this.loadMore}
                  id='load-more'
                  icon={
                    <MoreVertIcon
                      className={cn(classes.treeIcon, classes.treeIconButton)}
                    />
                  }
                  text={this.getLoadMoreText()}
                />
              )
              : null
          }
        </List>
      </Collapse>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MuiTreeBranch);
