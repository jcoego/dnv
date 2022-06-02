import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { objectKeys } from "../../utils/utils";
import { COMMON_FIELDS } from '../../utils/config';

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

const FileTreeView = ({tree=treeExample, onClick=()=>{}, ...props}) =>{
    if(!tree) return null;
    const renderTree = (nodes) =>{
         debugger
         let nodesK= objectKeys(nodes,COMMON_FIELDS);
         console.log('nodesK',nodesK)
        return (
            <TreeItem key={nodes['*path']} 
              nodeId={nodes['*path']} 
              label={nodes['*name']}
              onClick={e => onClick(nodes)}>

              {objectKeys(nodes,COMMON_FIELDS).length > 0
                  ? objectKeys(nodes,COMMON_FIELDS).map((nodekey) => renderTree(nodes[nodekey]))
                  : null
              }
            </TreeItem>
        );
    }

    return <div>
        <TreeView>
            {renderTree(tree)}
        </TreeView>
    </div>
}

export default FileTreeView;