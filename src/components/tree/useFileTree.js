import { useState } from "react";

import axios from 'axios';

import {getServerUrl}  from '../../utils/config';
import {insertNodeInTree, checkPathLocally, 
  checkDirExpanded, compressDirectory,
  checkEmptyObject} from '../../utils/utils'


const useFileTree = ()=>{
    const [selectedNode, setSelectedNode] = useState('');
    const [tree,setTree] = useState({});
    const [expanded, setExpanded] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [queryState, setQueryState] = useState({result:null,error:null, loading:false})
    

    //functions
    const onNodeToggle= (e,nodeIds) =>{
        setExpanded(nodeIds)
    }

    const onChangeSearchField = (data) =>{
        setSearchField(data);
    }

    const onClickSearch = async ()=>{
        //TODO: Validation if necessary.
        try{
            
            setQueryState(prevState => ({...prevState,error:null, result:null, loading:true}))
            let dataFromServer=null; 
           
            dataFromServer = await axios.get(`${getServerUrl()}?path=${searchField ? searchField : '/'}`);
            if(checkEmptyObject(dataFromServer ? dataFromServer.data : {})) throw new Error('No data received')
            
            setQueryState(prevState => 
                ({...prevState,error:null, result: 'Query executed successfully'}))
            
            setTree(dataFromServer ? dataFromServer.data : '')
        }catch(err){
            setQueryState(prevState => 
                ({...prevState,error:err.message ? err.message : 'Error retrieving data',result:null}))

        }finally{
            setQueryState(prevState => ({...prevState,loading:false}))
        }

    }

    const onClickSearchNode = async (node)=>{
        
            try{
              
              //check if path is expanded.
              let isDirExpanded = checkDirExpanded(expanded, node);
              if(isDirExpanded){
                let newExpanded = compressDirectory(expanded, node);
                setExpanded(newExpanded);
                return;
              }
            
              //check if data is in cache: if it is, we dont send request to server.
              let isPathLocally = checkPathLocally(tree,node);
              if(isPathLocally){
                console.log('PATH LOCALLY')
                setSelectedNode(node);
                setExpanded([...expanded,node['*path']])
                return;
              } /**/
              //query data from database
              setQueryState(prevState => ({...prevState,error: null, result: null,loading:true}))
              let path = node['*path'];
              let dataFromServer=null; 
              
              dataFromServer = await axios.get(`${getServerUrl()}?path=${path}`);
              if(checkEmptyObject(dataFromServer ? dataFromServer.data : {})) throw new Error('No data received')
        

              setQueryState(prevState => 
                  ({...prevState,error:null, result:'Query executed successfully'}))

              
              let newTree= insertNodeInTree(tree, dataFromServer.data,node['*path'])
              
              setTree(newTree);
              setSelectedNode(node);
              setExpanded([...expanded,node['*path']])
            }catch(err){
              setQueryState(prevState => 
                ({...prevState,error:err.message ? err.message : 'Error retrieving data',result:null}))

            }finally{
              setQueryState(prevState => ({...prevState,loading:false}))
            }
       
    }

   


    return[selectedNode, setSelectedNode, 
        tree, setTree, onNodeToggle, 
        expanded, setExpanded,
        onChangeSearchField, searchField, onClickSearch, queryState, onClickSearchNode
    ]

}

export default useFileTree;