export default function ScrollTop() {
  // 화면의 제일 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    // 버튼의 onClick으로 화면의 제일 위로 이동하는 함수 실행
    <button className="scrollToTopButton" onClick={scrollToTop}>
      위로
      <style jsx>{`
        .scrollToTopButton {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 100px;
          height: 100px;
          border-radius: 50px;
          font-size: 35px;
        }
      `}</style>
    </button>
  );
}
