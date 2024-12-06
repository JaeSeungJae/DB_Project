import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 110vh;
  height : 100%;
  background-color: #d9e9d9;
  padding: 20px;
  overflow-y: scroll;
    -webkit-overflow-scrolling: touch; 
`;

export const ManageButton = styled.button`
  background-color: #eaeaea;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #dcdcdc;
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


export const CommentActions = styled.div`
  display: flex;
  gap: 10px;
`;


export const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 50px auto; /* 중앙 정렬 */
`;

export const ReportTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const ReportSubtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
`;

export const RadioGroup = styled.div`
  text-align: left;
  margin: 20px 0;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const AddButton = styled.button`
  position: fixed;
  bottom: 150px;
  right: 30px;
  background-color: #c8facc;
  border: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 30px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #aef2ae;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 0 auto;
  margin-top : 20px;
`;

export const ContentInput = styled.textarea`
  width: 95%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const ImageUploadButton = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #eaeaea;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }

  label {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const RemoveImageButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e43e3e;
  }
`;

export const CompleteButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

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


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 15px;
  gap: 10px; 
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top : 20px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CommentsSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px; 
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CommentTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  margin-top: 0; 
   text-align: center;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-end; 
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto; 
  margin-bottom: 20px;
`;

export const CommentItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

export const CommentText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

export const RecommendationContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  margin-top: 5px; 
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 20px; 
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  width: 100%; 
  max-width: 800px; 
  min-height: 200px; 
  box-sizing: border-box;
`;
