import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { isFileImgOrTxt } from "../../utils/utils";

const PeviewFileNotImgNotTxt = ({url='', fileName='', size='', type='', path='', onClick=()=>{}}) =>{
    return (
        <div>
            {
                type==='directory' ? 
                (<div>
                    <h2>{path}</h2>
                    <h3>{`size ${size} MB`}</h3>
                </div>) : 
                (
                <div>
                    <h2>{path}</h2>
                    <h3>{`size ${size} MB`}</h3>
                    <Button onClick={e => onClick(url)} variant="outlined" startIcon={<DownloadForOfflineIcon />}>
                       download
                    </Button>
                </div>
                )
            }

        </div>
        
    )
}

const previewImage = ({url='', fileName='', size='', type='',path='', onClick=()=>{}}) =>{
    return (
        <div> 
            <h2>{path}</h2>
            <img src={url} alt={fileName} />
            <div>{`size: ${size} MB`}</div>
            <Button onClick={e => onClick(url)} variant="outlined" startIcon={<DownloadForOfflineIcon />}>
                download
            </Button>
        </div>
    )
}


const FilePreview = ({url='',fileName='', size='',type='',path='', onClick=()=>{}, ...props}) =>{
    let extensionFile = fileName ? fileName.split('.').pop() : '';
    let fileType =  isFileImgOrTxt(extensionFile);

    if(!fileName) return null;
   
    if (fileType==='img'){
      return <previewImage 
        path={path}
        url={url} 
        fileName={fileName} 
        size={size} 
        type={type} 
        onClick={(url)=>onClick(url)} 
      />
    }

    return (<PeviewFileNotImgNotTxt 
      path={path}
      url={url} 
      fileName={fileName} 
      size={size} 
      type={type} 
      onClick={(url)=>onClick(url)} 
    />)

}

export default FilePreview;