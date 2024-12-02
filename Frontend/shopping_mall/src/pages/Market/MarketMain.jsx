import React from "react";
import { useState } from "react";
import {
  PageContainer,
  FilterContainer,
  Title,
  InputGroup,
  Label,
  InputField,
  CategoryButton,
  ProductList,
  ProductItem,
  ImageBox,
  ProductInfo,
  ProductStatus,
  AddButton,
} from "./MarketStyle";
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

const MarketMain = () => {
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleSearch();
        }
    }

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
        <Title>Market</Title>
        <InputGroup>
          <Label htmlFor="search">상품 검색</Label>
          <InputField id="search" type="text" placeholder="Search for items" 
          value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="price">금액대 설정</Label>
          <InputField id="min-price" type="text" placeholder="원" />
          ~
          <InputField id="max-price" type="text" placeholder="원" style={{marginLeft: '10px'}} />
          <CategoryButton>카테고리 설정</CategoryButton>
        </InputGroup>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
            <CategoryButton style={{width: '100px'}} onClick={handleSearch}>검색</CategoryButton>
        </div>
      </FilterContainer>

      {/* 상품 리스트 */}
      {updateProductList()}

      {/* 상품 등록 버튼 */}
      <AddButton onClick={()=>navigate('/market/post')}>+</AddButton>
    </PageContainer>
  );
};

export default MarketMain;
