import React, { useEffect } from "react";
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

    const getProductList = async () => {
        try {
            const response = await fetch('http://localhost:8080/rest/getProductList', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response) {
                const data = await response.json();
                console.log(data);
                setProductList(data.products);
            }
          }
          catch {
      
          }
    }

    useEffect(()=> {
        getProductList();
        setFilteredProduct(productList);
    }, [])

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
                    {product.status}
                </ProductStatus>
            </ProductItem>
        ))}
        </ProductList>
        )
    }
    
    const [search, setSearch] = useState("");
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [productList, setProductList] = useState([]);
    const handleSearch = () => {
        const filtered = productList.filter((product) => 
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
