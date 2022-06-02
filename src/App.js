import  React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Layout from './components/common/Layout';
import FileTreeView from './components/tree/FileTreeView';
import FilePreview from './components/tree/FilePreview';
import useFileTree from './components/tree/useFileTree';
import Separator from './components/common/Separator';

import {downloadFile}  from './utils/utils';


function App() {

  let [selectedNode, setSelectedNode] = useFileTree()

  return (
    <Layout>
      <FileTreeView onClick={node => setSelectedNode(node)}/>
      <Separator />
      <FilePreview url={selectedNode ? selectedNode['*url'] : ''}
        path={selectedNode ? selectedNode['*path'] : ''}   
        fileName={selectedNode ? selectedNode['*name'] : ''} 
        size={selectedNode ? selectedNode['*size'] : ''} 
        type={selectedNode ? selectedNode['*type'] : ''} 
        onClick={(url)=> downloadFile(url)} 
        />
    </Layout>
  );
}

export default App;
