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
            },
            'imagen1.jpg':{
                '*url':'https://firebasestorage.googleapis.com/v0/b/development-environment-7fe5c.appspot.com/o/dnv%2Fimagen1.jpg?alt=media&token=b286577a-ebcc-4201-a1fa-e3d6a974b20b',
                '*path':'c/myfiles/procesos de logistica/imagen1.jpg',
                '*type':'file',
                '*name':'imagen1.jpg',
                '*size':100,
            },
            'readme.txt':{
                '*url':'https://firebasestorage.googleapis.com/v0/b/development-environment-7fe5c.appspot.com/o/dnv%2Ftexto1.txt?alt=media&token=c8240d83-d2f8-405b-9eb2-1b8a60e3d3a7',
                '*path':'c/myfiles/procesos de logistica/readme.txt',
                '*type':'file',
                '*name':'readme.txt',
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