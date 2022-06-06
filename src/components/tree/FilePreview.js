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

const PreviewImage = ({url='', fileName='', size='', type='',path='', onClick=()=>{}}) =>{
    return (
        <div> 
            <h2>{path}</h2>
            <img src={url}  height={'200px'} alt={fileName} />
            <div>{`size: ${size} MB`}</div>
            <Button onClick={e => onClick(url)} variant="outlined" startIcon={<DownloadForOfflineIcon />}>
                download
            </Button>
        </div>
    )
}

const PreviewText = ({url='', fileName='', size='', type='',path='', onClick=()=>{}}) =>{
  return (
      <div> 
          <h2>{path}</h2>
         
          <object data={url} height="200px">
            <iframe src={url} frameborder="0" height="200px"
            ></iframe>
          </object>
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
   

    if(!fileName) return <h2>No Path selected</h2>;
   
    if (fileType==='img'){
      return <PreviewImage 
        path={path}
        url={url} 
        fileName={fileName} 
        size={size} 
        type={type} 
        onClick={(url)=>onClick(url)} 
      />
    }

    if (fileType==='txt'){
      return <PreviewText 
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