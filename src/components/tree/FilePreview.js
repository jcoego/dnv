import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { isFileImgOrTxt } from "../../utils/utils";
import Title from '../common/Title';

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
            <iframe src={url} frameBorder="0" height="200px"
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
  

    return (
      <div>
        <Title message={'PREVIEW (IMAGES AND TXT)'} style={{backgroundColor:'#efe5e5', padding:'5px', borderRadius:'5px'}}/>
        {
          !fileName && <h4>No path selected</h4>
        }
        {
          fileType==='img' && <PreviewImage 
            path={path}
            url={url} 
            fileName={fileName} 
            size={size} 
            type={type} 
            onClick={(url)=>onClick(url)} 
          />
        }
         {
          fileType==='txt' && <PreviewText 
            path={path}
            url={url} 
            fileName={fileName} 
            size={size} 
            type={type} 
            onClick={(url)=>onClick(url)} 
          />
        }
        {
          (fileName && fileType!=='img' && fileType!=='txt') && <PeviewFileNotImgNotTxt 
            path={path}
            url={url} 
            fileName={fileName} 
            size={size} 
            type={type} 
            onClick={(url)=>onClick(url)} 
          />
        }
      </div>

    )
}

export default FilePreview;