import React, { useState, useRef } from "react";
import { PageContainer } from "./MarketStyle";
import { Header } from "./MarketStyle";
import { Button, LoginBox } from "../Auth/AuthStyle";
import { InputContainer } from "./MarketStyle";

const PostProduct = () => {
  const fileInputRef = useRef(null);
  const [name, setName] = useState(""); // 물품 이름
  const [price, setPrice] = useState(""); // 가격
  const [category, setCategory] = useState(""); // 카테고리
  const [description, setDescription] = useState(""); // 설명
  const [image, setImage] = useState(null); // 이미지 파일


  const handleButtonClick = () => {
    fileInputRef.current.click(); // ref를 통해 input 요소 클릭
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // FormData 객체 생성 (이미지 파일 포함 전송)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    try {
      // API 호출 (POST 요청)
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData, // FormData를 직접 전달
      });

      if (!response.ok) {
        throw new Error("판매글 등록 실패");
      }

      const data = await response.json();
      alert("판매글이 등록되었습니다!");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("판매글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <PageContainer>
        <Header>
            <h2>판매글 등록</h2>
        </Header>
      <LoginBox style={{width: '80%'}}>
      <form onSubmit={handleSubmit}>
        {/* 물품 이름 */}
        <InputContainer>
          <label htmlFor="name">물품 이름:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="물품 이름을 입력하세요"
            required
            style={{ width: "80%", padding: "8px", marginTop: "5px" }}
          />
        </InputContainer>

        {/* 가격 */}
        <InputContainer>
          <label htmlFor="price">가격:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="가격을 입력하세요"
            required
            style={{ width: "80%", padding: "8px", marginTop: "5px" }}
          />
        </InputContainer>

        {/* 카테고리 */}
        <InputContainer>
          <label htmlFor="category">카테고리:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{ width: "80%", padding: "8px", marginTop: "5px" }}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="electronics">전자제품</option>
            <option value="fashion">패션</option>
            <option value="home">가전제품</option>
            <option value="books">도서</option>
            <option value="other">기타</option>
          </select>
        </InputContainer>

        {/* 설명 */}
        <InputContainer>
          <label htmlFor="description">설명:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="제품에 대한 설명을 입력하세요"
            required
            style={{ width: "80%", padding: "8px", marginTop: "5px", height: "80px" }}
          />
        </InputContainer>

        {/* 이미지 */}
        <InputContainer style={{display: 'flex', justifyContent: 'center'}}>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"

            required
            style={{ marginTop: "5px" }}
            hidden
          />
        </InputContainer>
        <Button onClick={handleButtonClick}>
            이미지 업로드
        </Button>
        <p></p>

        {/* 제출 버튼 */}
        <Button
          type="submit"
        >
          등록하기
        </Button>
      </form>
      </LoginBox>
    </PageContainer>
  );
};

export default PostProduct;
