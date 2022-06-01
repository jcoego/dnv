import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { isFileImgOrTxt } from "../../utils/utils";

const PeviewFileNotImgNotTxt = ({url='', fileName='', size='', type='', onClick=()=>{}}) =>{
    return (
        <div>
            {
                type==='directory' ? 
                (<div>
                    <h2>{fileName}</h2>
                    <h3>{`size ${size} MB`}</h3>
                </div>) : 
                (
                <div>
                    <h2>{fileName}</h2>
                    <h3>{`size ${size} MB`}</h3>
                    <Button onClick={e => onClick(e)} variant="outlined" startIcon={<DownloadForOfflineIcon />}>
                       download
                    </Button>
                </div>
                )
            }

        </div>
        
    )
}

const previewImage = ({url='', fileName='', size='', type='', onClick=()=>{}}) =>{
    return (
        <div>
            <img src={url} alt={fileName} />
            <div>{`size: ${size} MB`}</div>
            <Button onClick={e => onClick(e)} variant="outlined" startIcon={<DownloadForOfflineIcon />}>
                download
            </Button>
        </div>
    )
}


const FilePreview = ({url='',fileName='', size='',type='', onClick=()=>{}, ...props}) =>{
    let extensionFile = fileName ? fileName.split('.').pop() : '';
    let fileType =  isFileImgOrTxt(extensionFile);
   
    if (fileType==='img'){
      return <previewImage 
        url={url} 
        fileName={fileName} 
        size={size} 
        type={type} 
        onClick={()=>{}} 
      />
    }

    return (<PeviewFileNotImgNotTxt 
      url={url} 
      fileName={fileName} 
      size={size} 
      type={type} 
      onClick={()=>{}} 
    />)

}

export default FilePreview;