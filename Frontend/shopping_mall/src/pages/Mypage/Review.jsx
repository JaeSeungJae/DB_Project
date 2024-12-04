import { useState } from "react";
import React from "react";
import { PageContainer } from "../Market/MarketStyle";
import { useParams } from "react-router-dom";
import { Header } from "../Market/MarketStyle";

const Review = () => {
    const {id} = useParams();
    const [content, setContent] = useState('');
    return (
        <PageContainer>
            <Header>
                <h2>후기 작성</h2>
            </Header>
            <input type="text"
            style={{width: '50%', height: '100%', minHeight: '100px', margin: '10px'}} 
            value={content}
            onChange={(e) => setContent(e.target.value)}/>
            <button style={{marginBottom: '200px'}}>등록</button>
        </PageContainer>
    )
}

export default Review;