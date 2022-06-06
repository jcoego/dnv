import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import Title from '../common/Title';
import { borderRadius } from '@mui/system';
import Feedback from '../common/Feedback';


const TreeSearcher = ({onChange=()=>{},value='', onClick=()=>{}, error='', ...props}) =>{
    return <Box
            sx={{
                background: '#efe5e5',
                padding: '20px',
                borderRadius: '5px'
            }}
        >
        <Title message={'SEARCHER'} />
        <TextField 
            sx={{marginRight:'10px', backgroundColor:'white'}}
            onChange={data=>onChange(data)} 
            value={value} 
            id="outlined-basic" 
            label="Introduce directory (*)" 
            variant="outlined" 
        />
        <Button onClick={e => onClick(e)} variant="contained" startIcon={<ArticleIcon />}>
            Search directory
        </Button>
       
   </Box>
}

export default TreeSearcher;