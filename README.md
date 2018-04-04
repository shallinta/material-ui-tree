# material-ui-tree
[![npm package](https://img.shields.io/npm/v/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
[![npm download](https://img.shields.io/npm/dt/material-ui-tree.svg)](https://www.npmjs.org/package/material-ui-tree)
![github dist file size](https://img.shields.io/github/size/shallinta/material-ui-tree/dist/index.js.svg)
[![github license](https://img.shields.io/github/license/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
[![github issues open](https://img.shields.io/github/issues/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aopen+is%3Aissue)
[![github issues closed](https://img.shields.io/github/issues-closed/shallinta/material-ui-tree.svg)](https://github.com/shallinta/material-ui-tree/issues?q=is%3Aissue+is%3Aclosed)
![github language top](https://img.shields.io/github/languages/top/shallinta/material-ui-tree.svg)
[![github stars](https://img.shields.io/github/stars/shallinta/material-ui-tree.svg?style=social&label=Stars)](https://github.com/shallinta/material-ui-tree)  

[![NPM](https://nodei.co/npm/material-ui-tree.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/material-ui-tree)
> A react tree component with material-ui.  


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
 material-ui
 material-ui-icons
```


### Usage


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

***getActionsData***: *(func)* The method to get data to render action buttons, with arguments `data`(object, current leaf data), `layer`(number, leaf layer in the tree), `expand`(bool, leaf expand status). Should return an array of buttons data including keys: `icon`, `label`, `hint`, `onClick`, `style={}`. At least one of `label` key and `icon` key are required.  

***renderLabel***: *(func)* The method to render tree leaf label, with arguments `data`(current leaf data). If this is set, `labelName` option will be ignored.  

***requestChildrenData***: *(func)* The method to request children data of tree leaf dynamically, with arguments `data`(object, current leaf data), `chdIndex`(number array, leaf indexs from tree root), `doExpand`(func, callback to expand current leaf's child branch). This function will not be called until the current leaf has no children data.  


### Recently updated?
Changelog available [here](https://github.com/shallinta/material-ui-tree/blob/master/CHANGELOG.md)


### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/shallinta/material-ui-tree/blob/master/LICENSE)
