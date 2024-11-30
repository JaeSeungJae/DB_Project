import styled from "styled-components";

// 전체 페이지 컨테이너
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #d9e9d9; /* 연한 초록색 배경 */
  padding: 20px;
`;

// 검색 및 필터 컨테이너
export const FilterContainer = styled.div`
  background-color: #eafaea;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 90%;
  max-width: 800px;
  margin-top: 50px;
`;

// 제목
export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

// 검색 입력 그룹
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

// 레이블
export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

// 입력 필드
export const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;
`;

// 카테고리 버튼
export const CategoryButton = styled.button`
  background-color: #dcdcdc;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #c8c8c8;
  }
`;

// 상품 리스트
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 800px;
  margin-bottom: 140px;
`;

// 상품 아이템 컨테이너
export const ProductItem = styled.div`
  display: flex;
  background-color: #eafaea;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

// 이미지 박스
export const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  margin-right: 20px;
`;

// 상품 정보
export const ProductInfo = styled.div`
  flex: 1;
`;

// 상품 상태 및 날짜
export const ProductStatus = styled.div`
  text-align: right;
  font-size: 12px;
  color: #555;
`;

// 상품 등록 버튼
export const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #c8facc;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  color: #333;
  cursor: pointer;
  margin-bottom: 140px;

  &:hover {
    background-color: #aef2ae;
  }
`;

export const SearchButton = styled(CategoryButton)`

`