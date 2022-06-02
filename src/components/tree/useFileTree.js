import { useState } from "react";

const useFileTree = ()=>{
    let [selectedNode, setSelectedNode] = useState({});


    return[selectedNode, setSelectedNode]

}

export default useFileTree;