# material-ui-tree
[![npm package](https://img.shields.io/npm/v/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
[![npm download](https://img.shields.io/npm/dt/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
[![github license](https://img.shields.io/github/license/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
[![github issues open](https://img.shields.io/github/issues/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aopen+is%3Aissue)
[![github issues closed](https://img.shields.io/github/issues-closed/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aissue+is%3Aclosed)
![github language top](https://img.shields.io/github/languages/top/shallinta/material-ui-tree.svg)
[![github stars](https://img.shields.io/github/stars/shallinta/material-ui-tree.svg?style=social&label=Stars)](https://github.com/shallinta/material-ui-tree)  

[![NPM](https://nodei.co/npm/material-ui-tree.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/material-ui-tree)
> A react tree component with material-ui.  
> See demo page: [Material-ui-tree Demo](https://wkp03p2jrl.codesandbox.io/)

### See about the next version?
[material-ui-tree@next](https://github.com/shallinta/material-ui-tree/tree/next)

### Installation
Available as npm package.
```sh
npm install --save material-ui-tree
```
Ensure to install these packages in your program because `material-ui-tree` depends on them.
```sh
npm install --save
 react
 react-dom
 prop-types
 classnames
 material-ui@next
 material-ui-icons
```


### Usage
>  See demo page code:  

[![Edit material-ui-tree demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wkp03p2jrl)


### Options
> All options are not necessary.  

- **className**: *(string)* The `className` will passed to container `Paper` component of material-ui.  

- **[deprecated] labelName**: *(string)* Label key to show in tree leaf data. Default to `'label'`. If `renderLabel` option is set, `labelName` will be ignored.  

- **labelKey**: *(string)* Label key to show in tree leaf data. Default to `'label'`. If `renderLabel` option is set, `labelKey` will be ignored.  

- **[deprecated] valueName(deprecated)**: *(string)* Value key in tree leaf data. Used for react children key. Default to `'value'`.  

- **valueKey**: *(string)* Value key in tree leaf data. Used for react children key. Default to `'value'`.  

- **[deprecated] childrenName**: *(string)* Children key to render child branch in tree leaf data. Default to `'children'`.  

- **childrenKey**: *(string)* Children key to render child branch in tree leaf data. Default to `'children'`.  

- **data**: *(object)* Initial tree data. Default to `{}`.  

- **title**: *(string)* Tree title. Default to `''`. If not set, title module will not show.  

- **[deprecated] expandFirst**: *(bool)* Whether expand the first branch of the tree in the beginning. Default to `false`.  

- **unfoldFirst**: *(bool)* Whether expand the first branch of the tree in the beginning. Default to `false`.  

- **[deprecated] expandAll**: *(bool)* Whether expand all branches of the tree in the beginning. Default to `false`.  

- **unfoldAll**: *(bool)* Whether expand all branches of the tree in the beginning. Default to `false`.  

- **[deprecated] childrenCountPerPage**: *(number)* Children leafs' count in each branch page. When tree leaf children data is too big, render them by page. Default to `20`.  

- **pageSize**: *(number)* Children leafs' count in each branch page. When tree leaf children data is too big, render them by page. Default to `20`.  

- **actionsAlignRight**: *(bool)* Whether the tree leaf action buttons aligns to right side. Action buttons will follow behind leaf label if it's false, or else will be aligned to right side. Default to `false`.  

- **foldIcon**: *(React OptionalElement)* Icon of tree node in fold status. Default to `<AddCircleOutlineIcon />(@material-ui/icons/AddCircleOutline)`. You should pass an react element of icon such as `<ArrowDownIcon />(@material-ui/icons/KeyboardArrowDown)` when you want to modify the icon.

- **unfoldIcon**: *(React OptionalElement)* Icon of tree node in unfold status. Default to `<RemoveCircleOutlineIcon />(@material-ui/icons/RemoveCircleOutline)`. You should pass an react element of icon such as `<ArrowUpIcon />(@material-ui/icons/KeyboardArrowUp)` when you want to modify the icon.

- **getActionsData**: *(func)* The method to get data to render action buttons, with arguments:  
  - `data` : object, current leaf data  
  - `chdIndex` : number array, leaf indexs from tree root  
  - `expand` : bool, leaf expand status  
  - `doExpand` : func, callback to expand current leaf's child branch  
Should return an array of buttons data including keys: `icon`, `label`, `hint`, `onClick`, `style={}`. At least one of `label` key and `icon` key are required.  

- **renderLabel**: *(func)* The method to render tree leaf label, with arguments:   
  - `data` : object, current leaf data   
  - `expand` : bool, current leaf expand status  
If this is set, `labelName` option will be ignored.  

- **requestChildrenData**: *(func)* The method to request children data of tree leaf dynamically, with arguments:  
  - `data` : object, current leaf data  
  - `chdIndex` : number array, leaf indexs from tree root  
  - `doExpand` : func, callback to expand current leaf's child branch  
This function will not be called until the current leaf has no children data.  


### Recently updated?
Changelog available [here](https://github.com/shallinta/material-ui-tree/blob/master/CHANGELOG.md)


### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
