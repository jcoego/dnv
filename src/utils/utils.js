import { treeViewClasses } from '@mui/lab/TreeView';
import _ from 'lodash';
import { FILE_IMG_EXTENSIONS } from "./config";

//return keys of array excluding some of them.
export const objectKeys = (obj, excludedArray) =>{
    try{
        let keysRes = [];
        keysRes= Object.keys(obj);
        if(!keysRes) return [];
        keysRes = keysRes.filter(key => {
            if(excludedArray.indexOf(key)===-1){
                return true;
            }
            return false;
        })
        return keysRes;
    }catch(err){
        return []
    }
}

//is file an image or txt.
export const isFileImgOrTxt = (fileExtension) =>{
    if(!fileExtension) return null;
    if(FILE_IMG_EXTENSIONS.indexOf(fileExtension)!==-1){
        return 'img'
    }
    if(fileExtension==='txt') return 'txt';
    return null;
}

//download file
export const downloadFile = (url) =>{
    if(!url) return;
    window.open(url);
}

//insert node inside the tree
export const insertNodeInTree = (tree={}, newNode={}, path='')=>{
    try{
        path = path.replace(/[.]/g, ' ');
        path = path.replace(tree['*path'],'');
        let pathItems = path.split('/');
        pathItems = pathItems.filter(pIt => !!pIt);
        pathItems=pathItems.join('.');
        let currentNodeValue= _.get(tree,pathItems)
        let treeRes = currentNodeValue ? _.set(tree,pathItems,{...newNode,...currentNodeValue}) : newNode;
        return treeRes;
    }catch(err){
        return tree;
    }
}

//check if data is in local tree
export const checkPathLocally = (tree, node) =>{
    try{
      let path = node['*path'];
      path = path.replace(/[.]/g, ' ');
      path = path.replace(tree['*path'],'');
      let pathItems = path.split('/');
      pathItems = pathItems.filter(pIt => !!pIt);
      pathItems=pathItems.join('.');
      let currentNode = _.get(tree,pathItems);
      return currentNode ? true :  false;
    }catch(err){
      return false;
    }
}