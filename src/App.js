import  React, {useState} from 'react';
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

  let [selectedNode, setSelectedNode,tree, setTree, onNodeToggle, expanded, setExpanded] = useFileTree();

 
  

  return (
    <Layout>
      <FileTreeView 
        onNodeToggle={onNodeToggle} expanded={expanded} 
        selected={selectedNode} tree={tree} onClick={node => {       
            if(node['*path']==='c/documents'){
              let newTree = {...tree};
              newTree['documents']={
                ...newTree['documents'],
                'videos':{ 
                  '*path':'c/documents/videos',
                  '*type':'directory',
                  '*name':'videos',
                  '*size':110,
                }
              }
              setTree(newTree);
              setSelectedNode(node['*path']);
            
              setExpanded([...expanded,node['*path']])
              return
             
            }
            setSelectedNode(node);
          }
        }
        />
      <Separator />
      <FilePreview url={selectedNode ? selectedNode['*url'] : ''}
        path={selectedNode ? selectedNode['*path'] : ''}   
        fileName={selectedNode ? selectedNode['*name'] : ''} 
        size={selectedNode ? selectedNode['*size'] : ''} 
        type={selectedNode ? selectedNode['*type'] : ''} 
        onClick={(url)=> downloadFile(url)} 
        />
        <button onClick={e =>{
         
        }}>Add data</button>
    </Layout>
  );
}

export default App;
