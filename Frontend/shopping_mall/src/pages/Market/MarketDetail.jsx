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
            product_id: Number(id) // 서버가 'uid'로 요청을 처리하도록 수정
          })
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProductInfo(data); // 수정: 서버가 ProductResponse를 바로 반환하므로 data 사용
        } else {
          console.error('Error fetching product info');
        }
      } catch (error) {
        console.error('Failed to fetch product info:', error.message);
      }
    };
    return (
        <PageContainer>
          {/* 상단 영역 */}
          {!productInfo ? (<p>loading...</p>) : (<>
            <Header>
            <h2>{productInfo.product_name}</h2>
            <div>
              <button style={{margin: '5px'}}>관심</button>
              <button style={{margin: '5px'}}>수정</button>
              <button style={{margin: '5px'}}>삭제</button>
              <button style={{margin: '5px'}}>신고</button>
            </div>
          </Header>
    
          {/* 상품 정보 */}
          <ProductDetailInfo>
            <p>판매자 : {productInfo.seller_name}</p>
            <p>상태 : 판매중</p>
            <p>가격 : {`${productInfo.product_price.toLocaleString('ko-KR')}원`}</p>
          </ProductDetailInfo>
    
          {/* 상품 이미지 */}
          <ImagesContainer>
            <ImageBox>{productInfo.product_image}</ImageBox>
          </ImagesContainer>
    
          {/* 상품 설명 */}
          <ProductInfo>
            <p>{productInfo.description}</p>
          </ProductInfo>
    
          {/* 버튼 */}
          <ButtonContainer style={{marginBottom:'200px'}}>
            <ActionButton onClick={()=>navigate(`/market/${id}/buy`, {state: {productInfo}})}>즉시 구매</ActionButton>
            <ActionButton>판매자와 채팅하기</ActionButton>
            <ActionButton>판매자 리뷰 보기</ActionButton>
          </ButtonContainer>
          </>)}
          
        </PageContainer>
    );
}

export default MarketDetail;