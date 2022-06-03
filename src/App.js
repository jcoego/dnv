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
let treeExample = {
  '*path':'c',
  '*type':'directory',
  '*name':'c',
  '*size':100,
  'myfiles':{
      '*path':'c/myfiles',
      '*type':'directory',
      '*name':'myfiles',
      '*size':100,
      "procesos de logistica":{
          '*path':'c/myfiles/procesos de logistica',
          '*type':'directory',
          '*name':'procesos de logistica',
          '*size':100,
          'gestion del almacén.doc':{
              '*path':'c/myfiles/procesos de logistica/gestion del almacén.doc',
              '*type':'file',
              '*name':'gestion del almacén.doc',
              '*size':100,
          },
          'inventario de salida.xls':{
              '*path':'c/myfiles/procesos de logistica/inventario de salida.xls',
              '*type':'file',
              '*name':'inventario de salida.xls',
              '*size':100,
          }
      }
  },
  'documents':{
      '*path':'c/documents',
      '*type':'directory',
      '*name':'documents',
      '*size':100,
  }
}


function App() {

  let [selectedNode, setSelectedNode] = useFileTree();

  return (
    <Layout>
      <FileTreeView tree={treeExample} onClick={node => setSelectedNode(node)}/>
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
