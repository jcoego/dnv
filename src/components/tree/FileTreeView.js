import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { objectKeys } from "../../utils/utils";
import { COMMON_FIELDS } from '../../utils/config';

//TODO: Delete treeExample
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

    console.log('selected',selected)
    return <div>
        <TreeView
          selected={[selected]}
          onNodeToggle={onNodeToggle}
         
          expanded={expanded} 
          onNodeSelect={(e,nodeIds)=> console.log('nodeIds',nodeIds)}
          /* 
          onNodeSelect={handleSelect} */
        >
            {renderTree(tree)}
        </TreeView>
    </div>
}

export default FileTreeView;