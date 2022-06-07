import Snackbar from '@mui/material/Snackbar';

export const Feedback= ({type = 'success', message=''})=>{
   
    let style = type ==='success' ? {color:'green'} : {color:'red'}
    
    return <div style={style}>
        {message ? message : ''}
    </div>
}

export default Feedback;