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
    if(fileExtension.indexOf(FILE_IMG_EXTENSIONS)!==-1){
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