# material-ui-tree@next
[![npm package](https://img.shields.io/npm/v/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
[![npm download](https://img.shields.io/npm/dt/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
[![github license](https://img.shields.io/github/license/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
[![github issues open](https://img.shields.io/github/issues/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aopen+is%3Aissue)
[![github issues closed](https://img.shields.io/github/issues-closed/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aissue+is%3Aclosed)
![github language top](https://img.shields.io/github/languages/top/shallinta/material-ui-tree.svg)
[![github stars](https://img.shields.io/github/stars/shallinta/material-ui-tree.svg?style=social&label=Stars)](https://github.com/shallinta/material-ui-tree)  

[![NPM](https://nodei.co/npm/material-ui-tree.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/material-ui-tree)
> A react tree component with material-ui.  
> See demo page: [Material-ui-tree Demo](https://94wyyw992r.codesandbox.io/)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

### What's new with next version?
- Take full use of material-ui 4.0.0 beta version.
- Take full use of react hooks, which needs react version 16.8.0 at least.
- Change some props name to make more sense.
- Add some props to adapt to more usage scenarios.
- Use rollup to pack and compress this component.

### Migration from material-ui-tree v1.*
- You should first learn about material-ui@4.* which is the strong dependence. [See material-ui@next](https://next.material-ui.com/)
- To support the next version, you should upgrade your react and react-dom version to at least v16.8.0.
- Changed properties:
  - `title`: change type <del>"string"</del> to "string | React Node".
  - `labelKey`: instead of old <del>labelName</del>
  - `valueKey`: instead of old <del>valueName</del>
  - `childrenKey`: instead of old <del>childrenName</del>
  - `unfoldFirst`: instead of old <del>expandFirst</def>
  - `unfoldAll`: instead of old <del>expandAll</del>
  - `pageSize`: instead of old <del>childrenCountPerPage</del>
  - `loadMoreIcon`: new property
  - `renderLoadMoreText`: new callback function
- Changed callback argument names:
  - `path`: instead of old <del>chdIndex</del>
  - `unfoldStatus`: instead of old <del>expand</del>
  - `toggleFoldStatus`: instead of old <del>doExpand</del>
- Util provided:
  - You can import `getNodeDataByPath, { withChildrenKey }` from "material-ui-tree/util" which is used to get tree node data with whole tree data and node path and children key.  
  - Function signature:
    1. getNodeDataByPath:: (object, array, string) -> object.
    2. withChildrenKey:: string -> (object, array) -> object.

### Installation
Available as npm package.
```sh
npm install --save material-ui-tree@next
```
Ensure to install these packages in your program because `material-ui-tree` depends on them.
```sh
npm install --save
 react
 react-dom
 prop-types
 classnames
 @material-ui/core@next
 @material-ui/icons@next
 @material-ui/styles@next
```


### Usage
>  See demo page code:  

[![Edit material-ui-tree@next demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/94wyyw992r?fontsize=14)


### Options
> All options are not required.  

#### Normal properties:

|option name | type | meaning | default value | remark |
|---|---|---|---|
|className|string|The `className` will passed to container `Paper` component of material-ui.| |
|labelKey|string|Label key to show in tree leaf data.|'label'|If `renderLabel` option is set, `labelKey` will be ignored.|
|valueKey|string|Value key in tree leaf data. Used for react children key.|'value'||
|childrenKey|string|Children key to render child branch in tree leaf data.|'children'||  
|data|object|Initial tree data.|{}||
|title|string or React Node|Tree title.|''|If not set, title module will not show.|
|unfoldFirst|bool|Whether unfold the first branch of the tree in the beginning.|false||
|unfoldAll|bool|Whether unfold all branches of the tree in the beginning.|false||
|pageSize|number|Children nodes' count in each branch page. When tree node children data is too big, render them by page.|20||
|actionsAlignRight|bool|Whether the tree node action buttons aligns to right side. Action buttons will follow behind node label if it's false, or else will be aligned to right side.|false||
|foldIcon|React OptionalElement|Icon of tree node in fold status.|`<AddCircleOutlineIcon />(@material-ui/icons/AddCircleOutline)`|You should pass an react element of icon such as `<ArrowDownIcon />(@material-ui/icons/KeyboardArrowDown)` when you want to modify the icon.|
|unfoldIcon|React OptionalElement|Icon of tree node in unfold status.|`<RemoveCircleOutlineIcon />(@material-ui/icons/RemoveCircleOutline)`|You should pass an react element of icon such as `<ArrowUpIcon />(@material-ui/icons/KeyboardArrowUp)` when you want to modify the icon.|
|loadMoreIcon|React OptionalElement|Icon of "load-more" tree node.|`<MoreVertIcon />(@material-ui/icons/MoreVert)`.|You should pass an react element of icon such as `<MoreHorizIcon />(@material-ui/icons/MoreHoriz)` when you want to modify the icon.|

#### Callback properties:

- **getActionsData**: *(func)* The method to get data to render action buttons, with arguments:  

|argument name|type|meaning|
|---|---|---|
|data|object|current node data|  
|path|array<number>|node indices from tree root|
|unfoldStatus|bool|node unfold status|
|toggleFoldStatus|func|callback to unfold current node's child tree|

Should return an array of buttons data including keys: `icon`, `label`, `hint`, `onClick`, `style={}`. At least one of `label` key and `icon` key are required. If only return one button's data, it's also ok to just return the button data object instead of its array.

- **renderLabel**: *(func)* The method to render tree node label, with arguments:  

|argument name|type|meaning|
|---|---|---|
|data|object|current node data|
|unfoldStatus|bool|current node unfold status|

If this is set, `labelKey` option will be ignored.

- **renderLoadMoreText**: *(func)* The method to render the "load-more" tree node when there are more than one page of children, with arguments:  

|argument name|type|meaning|
|---|---|---|
|page|number|current loaded page index.|
|pageSize|number|children count of each page.|
|total|number|total count of children.|

Should return text or react elements. The following templete will be returned by default:  

```js
`Loaded pages: ${(page + 1)} / Page size: ${pageSize} / Total: ${total}. Click here to load more...`
```

- **requestChildrenData**: *(func)* The method to request children data of tree node dynamically, with arguments:  

|argument name|type|meaning|
|---|---|---|
|data|object|current node data.|
|path|array<number>|node indices from tree root.|
|toggleFoldStatus|func|callback to unfold current node's child tree.|

This function will not be called until the current node has no children data.  


### Recently updated?
Changelog available [here](https://github.com/shallinta/material-ui-tree/blob/master/CHANGELOG.md)


### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
