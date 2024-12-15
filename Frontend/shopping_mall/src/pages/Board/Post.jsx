import React, { useState } from "react";
import {
  PageContainer,
  ArticleContainer,
  Title,
  TitleInput,
  ContentInput,
  ImageUploadContainer,
  ImageUploadButton,
  ImagePreview,
  RemoveImageButton,
  CompleteButton,
} from "./BoardStyle"; 
import Header from "../../modules/Header"; 
import Footer from "../../modules/Footer"; 
import { useNavigate } from "react-router-dom"; 

const Post = () => {
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState(""); 
  const [image, setImage] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const navigate = useNavigate();

  // 이미지 업로드 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); 
      setPreview(URL.createObjectURL(file)); 
    }
  };

  // 이미지 삭제 
  const handleImageRemove = () => {
    setImage(null); 
    setPreview(null);
  };

  // 게시글 등록 버튼 
  const handlePostSubmit = () => {
    if (title.trim() && content.trim()) {
      alert("게시글이 등록되었습니다!");

      navigate("/board");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };

  return (
    <PageContainer>
      <Header />

      <ArticleContainer>
        <Title>글쓰기</Title>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ContentInput
          as="textarea"
          rows="8"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <ImageUploadContainer>
          <ImageUploadButton>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload">+</label>
          </ImageUploadButton>
          {image && (
            <>
              <ImagePreview src={preview} alt="미리보기 이미지" />
              <RemoveImageButton onClick={handleImageRemove}>삭제</RemoveImageButton>
            </>
          )}
        </ImageUploadContainer>

        <CompleteButton onClick={handlePostSubmit}>완료</CompleteButton>
      </ArticleContainer>

      <Footer />
    </PageContainer>
  );
};

export default Post;
