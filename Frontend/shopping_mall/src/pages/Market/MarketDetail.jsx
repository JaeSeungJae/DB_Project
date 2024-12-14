import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer, Header, ProductInfo, ImagesContainer, ImageBox, ButtonContainer, ActionButton,
    ProductDetailInfo
 } from "./MarketStyle";

const MarketDetail = () => {
    const {id} = useParams();
    const [productInfo, setProductInfo] = useState();
    const navigate = useNavigate();
    useEffect(()=> {
      getProductInfo();
    }, [])
    const getProductInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8080/rest/getProduct`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: id
          })
        });
        if (response) {
          const data = await response.json();
          console.log(data);
          setProductInfo(data.data);
        }
      }
      catch {

      }
    }
    return (
        <PageContainer>
          {/* 상단 영역 */}
          <Header>
            <h2>{productInfo.name}</h2>
            <div>
              <button style={{margin: '5px'}}>관심</button>
              <button style={{margin: '5px'}}>수정</button>
              <button style={{margin: '5px'}}>삭제</button>
              <button style={{margin: '5px'}}>신고</button>
            </div>
          </Header>
    
          {/* 상품 정보 */}
          <ProductDetailInfo>
            <p>판매자 : (seller_id)</p>
            <p>상태 : (status)</p>
            <p>가격 : {`${productInfo.price.toLocaleString('ko-Kr')}원`}</p>
          </ProductDetailInfo>
    
          {/* 상품 이미지 */}
          <ImagesContainer>
            <ImageBox>Image</ImageBox>
            <ImageBox>Image</ImageBox>
            <ImageBox>Image</ImageBox>
          </ImagesContainer>
    
          {/* 상품 설명 */}
          <ProductInfo>
            <p>{productInfo.description}</p>
          </ProductInfo>
    
          {/* 버튼 */}
          <ButtonContainer>
            <ActionButton onClick={()=>navigate(`/market/${id}/buy`)}>즉시 구매</ActionButton>
            <ActionButton>판매자와 채팅하기</ActionButton>
            <ActionButton>판매자 리뷰 보기</ActionButton>
          </ButtonContainer>
        </PageContainer>
    );
}

export default MarketDetail;