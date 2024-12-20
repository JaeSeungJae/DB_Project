import styled from "styled-components";

// 전체 페이지 컨테이너
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh; /* 화면 크기를 초과하지 않도록 설정 */
  overflow-y: auto; /* 세로 스크롤 가능 */
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
  flex-wrap: wrap;
  max-width: 800px;
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
// Detail 페이지

// 상단 정보 영역
export const Header = styled.div`
  background-color: #eafaea;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

// 버튼 그룹 (수정, 삭제, 신고)
export const HeaderButton = styled.button`
  background-color: #dcdcdc;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #c8c8c8;
  }
`;

// 상품 이미지 영역
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

// 상품 설명 영역
export const ProductDescription = styled.div`
  background-color: #eafaea;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 버튼이 박스를 넘어가면 줄 바꿈 */
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
`;
// 큰 버튼
export const LargeButton = styled.button`
  background-color: #dcdcdc;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #c8c8c8;
  }
`;

export const ActionButton = styled.button`
  background-color: #eaeaea;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dcdcdc;
  }
`;
export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  background-color: #eafaea;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
`
export const InputContainer = styled.div`
margin-bottom: 10px; 
display: flex;
align-items: center;
justify-content: space-around;
`
