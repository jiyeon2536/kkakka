import { Link, Outlet } from "react-router-dom";
import FriendsBtn from "@/components/navbar/FriendsBtn";
import classes from "@/routes/RootLayout.module.css";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Alarm } from "@/components/navbar/Alarm";
import { ModeToggle } from "@/components/navbar/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RootLayout() {
  // 사용자 아이디 더미 데이터
  // const userId = "1";

  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 이동시마다 스크롤바는 항상 최상단에 위치하게 한다.
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <main className={classes.page}>
        {/* 왼쪽 사이드바 영역*/}
        <div className={classes.section_left}>
          {/* 로고 이미지 */}
          <Link to="/" className="mt-5 mb-20 w-4/5">
            <img alt="logo" src="/image/logo.png" />
          </Link>
          {/* 사이드바 메뉴 */}
          <Link to="/item" className={classes.menu}>
            <h1>아이템샵</h1>
          </Link>
          <Link to="/message" className={classes.menu}>
            <h1>메세지함</h1>
          </Link>
          <Link to="/setting" className={classes.menu}>
            <h1>환경 설정</h1>
          </Link>
          <Link to="/intro" className={classes.menu}>
            <h1>서비스 소개</h1>
          </Link>
        </div>

        {/* 네브바와 메인 페이지를 포함하는 영역 */}
        <div className={classes.section_right}>
          {/* 네브바 */}
          <nav className={classes.nav}>
            <div></div>

            {/* 로고 */}
            <h1>확성기 자리</h1>

            {/* 네브바 오른쪽 영역 */}
            <div className={classes.nav_right}>
              {/* 다크모드 버튼 (미완, 후순위) */}
              <ModeToggle />
              {/* 사용자 프로필 버튼 */}
              <Link
                to="/profile/1"
                className="mx-7 lg:hover:scale-125 transition-transform ease-in-out duration-500"
              >
                {/* 일단 나중에 동적으로 프사 받을 수 있도록 형식 변경함 */}
                <Avatar>
                  <AvatarImage
                    src="/image/liveImage.png"
                    alt="프사"
                    className="bg-cover"
                  />
                  <AvatarFallback>프사</AvatarFallback>
                </Avatar>
                {/* <div className={classes.user_image} /> */}
              </Link>

              {/* 알림 버튼 */}
              <Alarm />
              {/* 친구 버튼 */}
              <FriendsBtn />
            </div>
          </nav>

          {/* 메인 페이지 영역 */}
          <div className={classes.body}>
            <Outlet />
          </div>
        </div>
      </main>
      <TailwindIndicator />
    </>
  );
}
