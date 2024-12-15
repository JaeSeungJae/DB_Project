import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PageContainer,
  Header,
  ProductInfo,
  ImagesContainer,
  ImageBox,
  ButtonContainer,
  ActionButton,
  ProductDetailInfo,
} from "./MarketStyle";

const MarketDetail = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState();
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 상태
  const navigate = useNavigate();

  useEffect(() => {
    getProductInfo();
  }, []);

  const removeProduct = async () => {
    try {
      const response = await fetch("http://localhost:8080/rest/removeProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: id,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        alert("삭제가 완료되었습니다.");
        navigate('/market');
      } else {
        console.error("Failed to remove product");
      }
    } catch (error) {
      console.error("Error removing product:", error.message);
    }
  }

  const modifyProduct = async () => {
    try {
      const response = await fetch("http://localhost:8080/rest/modifyProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: id,
          product_price: price,
          product_description: description,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        alert("수정이 완료되었습니다.");
        setIsEditMode(false); // 수정 모드 종료
        getProductInfo(); // 최신 데이터 다시 불러오기
      } else {
        console.error("Failed to modify product");
      }
    } catch (error) {
      console.error("Error modifying product:", error.message);
    }
  };

  const getProductInfo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/rest/getProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: Number(id), // 서버가 'uid'로 요청을 처리하도록 수정
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProductInfo(data);
        setPrice(data.product_price); // 초기 가격 설정
        setDescription(data.product_description); // 초기 설명 설정
      } else {
        console.error("Error fetching product info");
      }
    } catch (error) {
      console.error("Failed to fetch product info:", error.message);
    }
  };

  return (
    <PageContainer>
      {/* 상단 영역 */}
      {!productInfo ? (
        <p>loading...</p>
      ) : (
        <>
          <Header>
            <h2>{productInfo.product_name}</h2>
            <div>
              <button style={{ margin: "5px" }}>관심</button>
              {productInfo.seller_id == localStorage.getItem("id") && (
                <>
                  <button
                    style={{ margin: "5px" }}
                    onClick={() => setIsEditMode(!isEditMode)} // 수정 모드 전환
                  >
                    {isEditMode ? "수정 취소" : "수정"}
                  </button>
                  <button style={{ margin: "5px" }}
                  onClick={removeProduct}>삭제</button>
                </>
              )}
              <button style={{ margin: "5px" }}>신고</button>
            </div>
          </Header>

          {/* 수정 모드 UI */}
          {isEditMode ? (
            <div style={{ padding: "20px" }}>
              <h3>상품 수정</h3>
              <label>가격: </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ marginBottom: "10px", width: "200px", padding: "5px" }}
              />
              <br />
              <label>설명: </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  marginBottom: "10px",
                  width: "80%",
                  padding: "5px",
                  height: "80px",
                }}
              />
              <br />
              <button
                onClick={modifyProduct}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px 20px",
                }}
              >
                저장
              </button>
            </div>
          ) : (
            <>
              {/* 상품 정보 */}
              <ProductDetailInfo>
                <p>판매자 : {productInfo.seller_name}</p>
                <p>상태 : 판매중</p>
                <p>가격 : {`${productInfo.product_price.toLocaleString("ko-KR")}원`}</p>
              </ProductDetailInfo>

              {/* 상품 이미지 */}
              <ImagesContainer>
                <ImageBox>{productInfo.product_image}</ImageBox>
              </ImagesContainer>

              {/* 상품 설명 */}
              <ProductInfo>
                <p>{productInfo.product_description}</p>
              </ProductInfo>

              {/* 버튼 */}
              <ButtonContainer style={{ marginBottom: "200px" }}>
                <ActionButton
                  onClick={() => navigate(`/market/${id}/buy`, { state: { productInfo } })}
                >
                  즉시 구매
                </ActionButton>
                <ActionButton>판매자와 채팅하기</ActionButton>
                <ActionButton>판매자 리뷰 보기</ActionButton>
              </ButtonContainer>
            </>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default MarketDetail;
