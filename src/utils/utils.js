
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