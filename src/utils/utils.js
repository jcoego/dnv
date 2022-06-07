import { treeViewClasses } from '@mui/lab/TreeView';
import _ from 'lodash';
import { FILE_IMG_EXTENSIONS, COMMON_FIELDS } from "./config";

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

//check if object is empty
export const checkEmptyObject = (obj) =>{
  try{
    
    if(!obj) return true;
    let objKeys = Object.keys(obj);
    if(!objKeys) return true;
    return objKeys.length === 0 ? true : false
  }catch(err){
    return true;
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
      if(!currentNode) return false;
      let keysCurrentNode = Object.keys(currentNode);
      for(let keysCurrentNodeItem of keysCurrentNode){
        if(COMMON_FIELDS.indexOf(keysCurrentNodeItem)===-1){
          return true;
        }
      }
      return false;

    }catch(err){
      return false;
    }
}

//check if directory is expanded
export const checkDirExpanded = (expandedNodes, node) =>{
  if(node['*type']!=='directory') return false;
  let path = node['*path'];
  if(!expandedNodes || expandedNodes.length < 1 || !path) return false;
  if(expandedNodes.indexOf(path)!==-1) return true;
}

//compress directory
export const compressDirectory = (expandedNodes, node) =>{
  try{
    let expanded = [...expandedNodes];
    let path = node['*path'];
    //expanded = expanded.filter(exp => exp!==path);
    expanded = expanded.filter(exp => exp.indexOf(path)===-1)
    return expanded;
  }catch(err){
    return expandedNodes;
  }

}