import React, { useState } from "react";
import {
  PageContainer,
  ArticleContainer,
  TitleContainer,
  Title,
  Content,
  ButtonContainer,
  ActionButton,
  CommentsSection,
  CommentList,
  CommentItem,
  CommentText,
  CommentActions,
  CommentInputContainer,
  CommentInput,
  CommentTitle,
  SubmitButton,
  RecommendationContainer,
} from "./BoardStyle.jsx";
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const articleTitle = location.state?.title || "게시글 제목";
  const [content, setContent] = useState(
    "이곳에 게시글의 내용이 표시됩니다. 작성자가 입력한 내용이 렌더링됩니다."
  );
  const [editMode, setEditMode] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, text: "좋은 글이네요!", likes: 3 },
    { id: 2, text: "공감합니다!", likes: 5 },
    { id: 3, text: "유익한 정보 감사합니다.", likes: 1 },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, text: newComment, likes: 0 }]);
      setNewComment("");
    }
  };

  const handleLikeComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleReportClick = () => {
    navigate("/report", { state: { title: articleTitle } });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      alert("게시글이 삭제되었습니다.");
      navigate("/board");
    }
  };

  return (
    <PageContainer>
      <Header />
      <ArticleContainer>
        <TitleContainer>
          <Title>{articleTitle}</Title>
          <ButtonContainer>
            {editMode ? (
              <ActionButton onClick={handleEditComplete}>완료</ActionButton>
            ) : (
              <ActionButton onClick={handleEdit}>수정</ActionButton>
            )}
            <ActionButton onClick={handleDelete}>삭제</ActionButton>
          </ButtonContainer>
        </TitleContainer>

        <RecommendationContainer>
          <ActionButton>추천 N</ActionButton>
        </RecommendationContainer>

        {editMode ? (
          <Content
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <Content>{content}</Content>
        )}
      </ArticleContainer>

      <CommentsSection>
  <CommentTitle>댓글</CommentTitle>
  <CommentList>
    {comments.map((comment) => (
      <CommentItem key={comment.id}>
        <CommentText>{comment.text}</CommentText>
        <CommentActions>
          <ActionButton onClick={() => handleLikeComment(comment.id)}>
            추천 {comment.likes}
          </ActionButton>
          <ActionButton onClick={handleReportClick}>신고</ActionButton>
        </CommentActions>
      </CommentItem>
    ))}
  </CommentList>
  <CommentInputContainer>
    <CommentInput
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="댓글을 입력하세요."
    />
    <SubmitButton onClick={handleAddComment}>작성</SubmitButton>
  </CommentInputContainer>
</CommentsSection>;
      <Footer />
    </PageContainer>
  );
};

export default Article;
