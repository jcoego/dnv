import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';


const TreeSearcher = ({onChange=()=>{},value='', onClick=()=>{}, ...props}) =>{
    return <>
        <TextField 
            onChange={data=>onChange(data)} 
            value={value} id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
        />
        <Button onClick={e => onClick(e)} variant="outlined" startIcon={<ArticleIcon />}>
            Search directory
        </Button>
   </>
}

export default TreeSearcher;