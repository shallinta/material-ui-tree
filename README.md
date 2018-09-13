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

***className***: *(string)* The `className` will passed to container `Paper` component of material-ui.  

***labelName***: *(string)* Label key to show in tree leaf data. Default to `'label'`. If `renderLabel` option is set, `labelName` will be ignored.  

***valueName***: *(string)* Value key in tree leaf data. Used for react children key. Default to `'value'`.  

***childrenName***: *(string)* Children key to render child branch in tree leaf data. Default to `'children'`.  

***data***: *(object)* Initial tree data. Default to `{}`.  

***title***: *(string)* Tree title. Default to `''`. If not set, title module will not show.  

***expandFirst***: *(bool)* Whether expand the first branch of the tree in the beginning. Default to `false`.  

***expandAll***: *(bool)* Whether expand all branches of the tree in the beginning. Default to `false`.  

***childrenCountPerPage***: *(number)* Children leafs' count in each branch page. When tree leaf children data is too big, render them by page. Default to `20`.  

***actionsAlignRight***: *(bool)* Whether the tree leaf action buttons aligns to right side. Action buttons will follow behind leaf label if it's false, or else will be aligned to right side. Default to `false`.  

***getActionsData***: *(func)* The method to get data to render action buttons, with arguments:  
- `data` : object, current leaf data  
- `chdIndex` : number array, leaf indexs from tree root  
- `expand` : bool, leaf expand status  
- `doExpand` : func, callback to expand current leaf's child branch  
Should return an array of buttons data including keys: `icon`, `label`, `hint`, `onClick`, `style={}`. At least one of `label` key and `icon` key are required.  

***renderLabel***: *(func)* The method to render tree leaf label, with arguments:   
- `data` : object, current leaf data   
- `expand` : bool, current leaf expand status  
If this is set, `labelName` option will be ignored.  

***requestChildrenData***: *(func)* The method to request children data of tree leaf dynamically, with arguments:  
- `data` : object, current leaf data  
- `chdIndex` : number array, leaf indexs from tree root  
- `doExpand` : func, callback to expand current leaf's child branch  
This function will not be called until the current leaf has no children data.  

***onPrimaryClick***: *(func)* The method to handle leaf click separately from expand/collapse, with arguments:  
- `data` : object, current leaf data  
- `chdIndex` : number array, leaf indexs from tree root  
- `doExpand` : func, callback to expand current leaf's child branch  
This function by default works as expand/collapse.
If this function available to expand/collapse current leaf simply click in icon on the left. 

***renderLabelIcon***: *(func)* The method to render tree leaf label icon, with arguments:  
- `data` : object, current leaf data  
- `childrenName` : name of key to render child branch
- `expand` : current Collapse state
This function by default renders rounded plus or minus to all leafs.

***renderLoadMoreText***: *(func)* The method to render load more text, with arguments:  
- `childrenPage` : number of currently shown items  
- `childrenCountPerPage` : number of children showing on one page  
- `childrenLength` : total number of children
This function by default shows text like ``'First 5/20 shown， click to load more items...'``.

***perPage***: *(bool)* extends load more feature with hiding previous nth-children and add text above the all children to show previous. Default to `false`.

***renderLoadLessText***: *(func)* The method to render load previous page text, with arguments:  
- `childrenPage` : number of currently shown items  
- `childrenCountPerPage` : number of children showing on one page  
- `childrenLength` : total number of children
This function by default shows text like ``'5/20 shown， click to load previous items...'``.

### Recently updated?
Changelog available [here](https://github.com/shallinta/material-ui-tree/blob/master/CHANGELOG.md)


### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
