import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { objectKeys } from "../../utils/utils";
import { COMMON_FIELDS } from '../../utils/config';
import Title from '../common/Title';


const LabelSelectedDocument = ({selected, path, name}) =>{
  if(selected===path){
    return <strong>{name}</strong>
  }
  return name;
}

const FileTreeView = ({tree, onClick=()=>{}, 
    onNodeToggle=()=>{},expanded=[],
    selected='', 
    ...props}) =>{
    if(!tree) return null;
    const renderTree = (nodes) =>{
      
        return (
            <TreeItem key={nodes['*path']} 
              nodeId={nodes['*path']} 
              //label={selected === nodes['*path'] ? <strong>{nodes['*name']}</strong> : nodes['*name']}
              label = {<LabelSelectedDocument selected={selected} path={nodes['*path'] } name={nodes['*name']} />}
              onClick={e => onClick(nodes)}>

              {objectKeys(nodes,COMMON_FIELDS).length > 0
                  ? objectKeys(nodes,COMMON_FIELDS).map((nodekey) => renderTree(nodes[nodekey]))
                  : null
              }
            </TreeItem>
        );
    }


    return <div>
      <Title message={'File Tree'} style={{backgroundColor:'#efe5e5', padding:'5px', borderRadius:'5px'}} />
      {tree ?
        (<TreeView
        selected={[selected]}
        onNodeToggle={onNodeToggle}
       
        expanded={expanded} 
        onNodeSelect={(e,nodeIds)=> console.log('')}
        /* 
        onNodeSelect={handleSelect} */
      >
          {renderTree(tree)}
      </TreeView>) :
      <h3>No data</h3>

      }
        
    </div>
}

export default FileTreeView;