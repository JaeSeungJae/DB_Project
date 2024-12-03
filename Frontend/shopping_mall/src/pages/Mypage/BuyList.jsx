import React from "react";
import { useState } from "react";
import {
  PageContainer,
  FilterContainer,
  Title,
  ProductList,
  ProductItem,
  ImageBox,
  ProductInfo,
  ProductStatus,
  AddButton,
} from "../Market/MarketStyle";
import { useNavigate } from "react-router-dom";

const tempProductList = [
    {
        product_name: '상품1',
        product_price: '10000',
        product_description: '이 상품은 상품1입니다. 이 상품은 상품1입니다. 이 상품은 상품1입니다.',
        product_image: '상품1 이미지',
        product_category: '컴퓨터',
        product_id: 1
    },
    {
        product_name: '상품2',
        product_price: '20000',
        product_description: '이 상품은 상품2입니다.',
        product_image: '상품2 이미지',
        product_category: '스마트폰',
        product_id: 2
    },
    {
        product_name: '상품3',
        product_price: '30000',
        product_description: '이 상품은 상품3입니다.',
        product_image: '상품3 이미지',
        product_category: '키보드',
        product_id: 3
    }
]

const FavoriteList = () => {
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleSearch();
        }
    }

    const handleReviewProduct = (productId) => {
        navigate(`/mypage/buy/review/${productId}`);
    };

    const truncateDesc = (text, limit) => {
        if (text.length > limit) {
            return text.slice(0, limit) + "...";
        }
        return text;
    }

    const updateProductList = () => { // 추후 rest/getProductList를 통해 목록을 불러옴
        return (
        <ProductList>
        {filteredProduct.map((product) => (
            <ProductItem key={product.product_id} onClick={()=>navigate(`/market/${product.product_id}`)}
            style={{cursor: 'pointer'}}>
                <ImageBox>{product.product_image}</ImageBox>
                <ProductInfo>
                    <div>{product.product_name}</div>
                    <div>{Number(product.product_price).toLocaleString('ko-KR')}원</div>
                    <div>{truncateDesc(product.product_description, 30)}</div>
                </ProductInfo>
                <ProductStatus>
                    거래 상태<br />
                    20XX.XX.XX - XX:XX
                </ProductStatus>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // 부모 클릭 이벤트 전파 방지
                        handleReviewProduct(product.product_id);
                    }}
                    style={{
                        position: "relative",
                        top: "40px",
                        right: "100px",
                        backgroundColor: "#6f7f6f",
                        color: "white",
                        border: "none",
                        width: "100px",
                        height: "24px",
                        cursor: "pointer",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "16px",
                    }}
                    >
                    후기 작성
                </button>
            </ProductItem>
        ))}
        </ProductList>
        )
    }
    
    const [search, setSearch] = useState("");
    const [filteredProduct, setFilteredProduct] = useState(tempProductList);
    const handleSearch = () => {
        const filtered = tempProductList.filter((product) => 
            product.product_name.includes(search)
        )
        setFilteredProduct(filtered);
    }


  return (
    <PageContainer>
      {/* 검색 및 필터 */}
      <FilterContainer>
        <Title>구매 내역</Title>
      </FilterContainer>

      {/* 상품 리스트 */}
      {updateProductList()}

      {/* 상품 등록 버튼 */}
      <AddButton onClick={()=>navigate('/market/post')}>+</AddButton>
    </PageContainer>
  );
};

export default FavoriteList;
