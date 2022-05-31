import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Layout from './components/common/Layout';


function App() {
  return (
    <Layout>
      <TreeView>
        <TreeItem key={'/a'} nodeId={"/a"} label={'A'}>
          <TreeItem key={'/a/b'} nodeId={"/a/b"} label={'B'}>
            <TreeItem onClick={e => alert('hola')} key={'/a/b/c'} nodeId={"/a/b/c"} label={'C'}>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>

    </Layout>
  );
}

export default App;
