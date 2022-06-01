import  React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Layout from './components/common/Layout';
import FileTreeView from './components/tree/FileTreeView';
import FilePreview from './components/tree/FilePreview';


function App() {
  return (
    <Layout>
      <FileTreeView />
    </Layout>
  );
}

export default App;
