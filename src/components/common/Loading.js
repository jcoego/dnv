import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const styleMain = {
    position: 'fixed',
    zIndex: '10000',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0'
  }
  
  const styleCircular = {
    position: 'fixed',
    zIndex: '100',
    top: '45%',
    left: '45%'
  }

const Loading = ({ open = false, size = 60 }) => {
    if (!open) return null
    return (
      <div style={styleMain}>
        <div style={styleCircular}>
          <CircularProgress size={size} />
        </div>
      </div>
    )
  }

export default Loading;