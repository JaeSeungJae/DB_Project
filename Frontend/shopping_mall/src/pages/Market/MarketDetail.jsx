import React from "react";
import { useParams } from "react-router-dom";
import { PageContainer, Header, ProductInfo, ImagesContainer, ImageBox, ButtonContainer, ActionButton,
    ProductDetailInfo
 } from "./MarketStyle";

const MarketDetail = () => {
    const {id} = useParams();
    
    return (
        <PageContainer>
          {/* 상단 영역 */}
          <Header>
            <h2>(product_name)</h2>
            <div>
              <button style={{margin: '5px'}}>수정</button>
              <button style={{margin: '5px'}}>삭제</button>
              <button style={{margin: '5px'}}>신고</button>
            </div>
          </Header>
    
          {/* 상품 정보 */}
          <ProductDetailInfo>
            <p>판매자 : (seller_id)</p>
            <p>상태 : (status)</p>
            <p>가격 : (product_price)</p>
          </ProductDetailInfo>
    
          {/* 상품 이미지 */}
          <ImagesContainer>
            <ImageBox>Image</ImageBox>
            <ImageBox>Image</ImageBox>
            <ImageBox>Image</ImageBox>
          </ImagesContainer>
    
          {/* 상품 설명 */}
          <ProductInfo>
            <p>상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. 상품{id}의 설명입니다. </p>
          </ProductInfo>
    
          {/* 버튼 */}
          <ButtonContainer>
            <ActionButton>즉시 구매</ActionButton>
            <ActionButton>판매자와 채팅하기</ActionButton>
            <ActionButton>판매자 리뷰 보기</ActionButton>
          </ButtonContainer>
        </PageContainer>
    );
}

export default MarketDetail;