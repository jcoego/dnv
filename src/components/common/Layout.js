import Box from '@mui/material/Box';


const defaultStyles = {
    padding: '10px',
    border: '1px solid grey',
    borderRadius: '5px',
    margin: '5px'
}

const Layout = ({children, styles, ...props})=>{
    let layoutStyles = {...defaultStyles, ...styles}; //We have styles by default but overwritte styles if needed
    return <Box sx= {layoutStyles}>
        {children}
    </Box>
}

export default Layout;