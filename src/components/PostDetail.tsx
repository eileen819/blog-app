import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">게시글 제목</div>
          <div className="post__profile-box">
            <div className="post__profile-image" />
            <div className="post__profile-name">Eileen</div>
            <div className="post__date">2024.08.07 수요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__text">게시글 내용입니다.</div>
        </div>
      </div>
    </>
  );
}
