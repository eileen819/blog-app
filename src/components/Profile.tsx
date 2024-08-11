import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="user__profile">
        <div className="profile__image" />
        <div className="profile__detail">
          <div className="profile__email">test@test.com</div>
          <div className="profile__name">김유저</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
}
