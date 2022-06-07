import  React, {useState} from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Layout from './components/common/Layout';
import FileTreeView from './components/tree/FileTreeView';
import TreeSearcher from './components/tree/TreeSearcher';
import FilePreview from './components/tree/FilePreview';
import useFileTree from './components/tree/useFileTree';
import Separator from './components/common/Separator';
import Loading from './components/common/Loading';

import {downloadFile, insertNodeInTree}  from './utils/utils';
import Feedback  from './components/common/Feedback';


function App() {

  let [selectedNode, setSelectedNode,
    tree, setTree, 
    onNodeToggle, expanded, setExpanded,
    onChangeSearchField,searchField,  onClickSearch, queryState, onClickSearchNode
  ] = useFileTree();

  console.log('expanded',expanded)

  return (
    <Layout>
      <Loading open={queryState.loading} />
      <TreeSearcher 
        onChange={e => onChangeSearchField(e.target.value)}
        value={searchField}
        onClick={(e)=>onClickSearch()}
        error={queryState.error}
      />
      <br/>
      <Feedback type={(queryState && queryState.error) ? 'error' : 'success'} message={queryState.error || queryState.result} />
      <Separator />
      <FileTreeView 
        onNodeToggle={onNodeToggle} expanded={expanded} 
        selected={selectedNode['*path']} tree={tree} onClick={node => onClickSearchNode(node) }/>
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
