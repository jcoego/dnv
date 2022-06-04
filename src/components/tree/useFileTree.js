import { useState } from "react";

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

const useFileTree = ()=>{
    let [selectedNode, setSelectedNode] = useState('');
    let [tree,setTree] = useState(treeExample);
    let [expanded, setExpanded] = useState([]);

    //functions
    const onNodeToggle= (e,nodeIds) =>{
        setExpanded(nodeIds)
    }

   


    return[selectedNode, setSelectedNode, tree, setTree, onNodeToggle, expanded, setExpanded]

}

export default useFileTree;