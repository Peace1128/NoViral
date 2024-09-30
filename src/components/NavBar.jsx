import React, { useState } from "react";
import "./NavBar.css";

function Navbar() {
  // 테스트할 때는 로그인 상태를 임시로 true로 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMyInfoOpen, setIsMyInfoOpen] = useState(false);

  // 내가 등록한 의견 개수 (임시로 1개로 설정) 추후 api로 변경
  const [userCommentsCount, setUserCommentsCount] = useState(1);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMyInfoEnter = () => {
    setIsMyInfoOpen(true);
  };

  const handleMyInfoLeave = () => {
    setIsMyInfoOpen(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("회원탈퇴를 진행하시겠습니까?")) {
      window.location.href = "/delete-account"; // 회원탈퇴 페이지 임의지정
    }
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 후 네비바가 변경됨
    // 현재 페이지는 유지되고 네비게이션 바만 업데이트
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <a href="/">Noviral</a>
        </div>
        <ul className="nav-links">
          {/* PRODUCT 드롭다운 */}
          <li
            className="nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              PRODUCT
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/category1">상품목록1</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category2">상품목록2</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category3">상품목록3</a>
                </li>
              </ul>
            )}
          </li>

          {/* 로그인 상태에 따른 UI */}
          {!isLoggedIn ? (
            <li className="nav-item">
              <a href="/login" className="nav-link">
                LOGIN
              </a>
            </li>
          ) : (
            <li
              className="nav-item"
              onMouseEnter={handleMyInfoEnter}
              onMouseLeave={handleMyInfoLeave}
            >
              <a href="#" className="nav-link">
                MYINFO
              </a>
              {isMyInfoOpen && (
                <ul className="myinfo-menu">
                  {/* 내가 등록한 의견 표시 */}
                  <li className="myinfo-item">
                    <a href="/my-comments">
                      내가 등록한 의견: {userCommentsCount}개
                    </a>
                  </li>
                  <li className="myinfo-item">
                    <a href="/change-password">비밀번호 변경</a>
                  </li>
                  <li className="myinfo-item">
                    <a href="#" onClick={handleDeleteAccount}>
                      회원탈퇴
                    </a>
                  </li>
                  <li className="myinfo-item">
                    <a href="#" onClick={handleLogout}>
                      로그아웃
                    </a>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
