export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
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
