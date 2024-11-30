import React from "react";
import { useParams } from "react-router-dom";

const MarketDetail = () => {
    const {id} = useParams();
    
    return (
        <div style={{marginTop: '100px'}}>{id}</div>
    )
}

export default MarketDetail;