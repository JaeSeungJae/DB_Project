import React, { useState } from "react";
import {
  PageContainer,
  FilterContainer,
  Title,
  ProductList,
  ProductItem,
  ImageBox,
  ProductInfo,
  ProductStatus,
  DeleteButton,
} from "./ManagerStyle";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";

const initialProductList = [
  {
    product_id: 1,
    product_name: "상품1",
    product_image: "Image",
    seller: "유저1",
    transaction_status: "거래 중",
    date: "20XX.XX.XX - XX:XX",
  },
  {
    product_id: 2,
    product_name: "상품2",
    product_image: "Image",
    seller: "유저2",
    transaction_status: "판매 완료",
    date: "20XX.XX.XX - XX:XX",
  },
  {
    product_id: 3,
    product_name: "상품3",
    product_image: "Image",
    seller: "유저3",
    transaction_status: "거래 중",
    date: "20XX.XX.XX - XX:XX",
  },
  {
    product_id: 4,
    product_name: "상품4",
    product_image: "Image",
    seller: "유저4",
    transaction_status: "거래 중",
    date: "20XX.XX.XX - XX:XX",
  },
];

const MarketManage = () => {
  const [productList, setProductList] = useState(initialProductList);

  // 삭제 기능
  const handleDelete = (id) => {
    const updatedList = productList.filter((product) => product.product_id !== id);
    setProductList(updatedList);
  };

  return (
    <PageContainer>
      <Header />

      <FilterContainer>
        <Title>Market 관리</Title>
      </FilterContainer>

      <ProductList>
        {productList.map((product) => (
          <ProductItem key={product.product_id}>
            <ImageBox>{product.product_image}</ImageBox>
            <ProductInfo>
              <div>상품 이름 : {product.product_name}</div>
              <div>게시자 닉네임 : {product.seller}</div>
            </ProductInfo>

            <ProductStatus>
              거래 상태<br />
              {product.date}
            </ProductStatus>

            <DeleteButton onClick={() => handleDelete(product.product_id)}>
              삭제
            </DeleteButton>
          </ProductItem>
        ))}
      </ProductList>

      <Footer />
    </PageContainer>
  );
};

export default MarketManage;
