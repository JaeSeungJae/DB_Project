import styled from "styled-components";

// 전체 페이지 컨테이너 
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  background-color: #d9e9d9;
  padding: 20px;
  overflow-y: scroll; 
  -webkit-overflow-scrolling: touch; 
`;

// 페이지 타이틀
export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-top: 75px;
  margin-bottom: 40px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 90%;
  max-width: 350px;
`;

// 스타일링된 버튼
export const StyledButton = styled.button`
  background-color: #ffffff;
  color: #333;
  border: 1px solid #995c3a; 
  padding: 15px 0;
  font-size: 18px;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background-color: #f0f0f0; 
  }
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: #eafaea;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #c8facc;
  color: #333;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #b6e9bb;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;



// 필터 컨테이너
export const FilterContainer = styled.div`
  background-color: #eafaea;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  width: 90%;
  max-width: 800px;
  text-align: center;
`;



export const DeleteConfirmBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  z-index: 1000;

  p {
    margin: 0 0 20px;
    font-size: 16px;
    color: #333;
  }

  button {
    margin-right: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .confirm {
    background-color: #ff6666;
    color: white;
  }

  .cancel {
    background-color: #ddd;
    color: #333;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const HighlightText = styled.span`
  font-weight: bold;
  color: #995c3a;
  font-size: 16px;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b6e9bb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #85d68a;
  }
`;


// 상품 리스트
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 800px;
  margin: 20px 0;
`;



// 이미지 박스
export const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
`;

// 상품 정보
export const ProductInfo = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 16px;
  color: #333;
`;

// 조회 버튼 스타일
export const ViewButton = styled.button`
  background-color: #eaeaea;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #ddd;
  }
`;

// 테이블 스타일
export const UserTable = styled.table`
  width: 90%;
  max-width: 800px;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

// 프로필 제목
export const ProfileTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

// 각 정보 행
export const InfoRow = styled.div`
display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;


// 회원 정보 컨테이너
export const InfoContainer = styled.div`
  background-color: #eafaea;
  width: 90%;
  max-width: 450px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

// Input 필드
export const InputField = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  width: 100px;
  margin-right: 10px;
`;

// 기존 스타일 유지
export const InfoValue = styled.div`
  flex: 2;
  color: #555;
  text-align: left;
`;

export const InfoLabel = styled.div`
  flex: 1;
  font-weight: bold;
  color: #333;
  text-align: left; 
`;

export const EditButton = styled.button`
padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

export const ForceLogoutButton = styled.button`
  background-color: #ff6666;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;

  &:hover {
    background-color: #e64c4c;
  }
`;


// 로그아웃 버튼 스타일
export const LogoutButton = styled(StyledButton)`
  background-color: #ff6666;
  color: white;
  border: none;

  &:hover {
    background-color: #e64c4c;
  }
`;

// 거래 상태
export const ProductStatus = styled.div`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-right: 20px; 
`;

// 삭제 버튼
export const DeleteButton = styled.button`
  background-color: #ff9999;
  border: 1px solid #e57373;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #ff6666;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  background-color: #eafaea;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  gap: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
