export default function About() {
  return (
    <div className={"aboutContainer"}>
      <div className={"aboutUs"}>About Us</div>
      <h1>
        Welcome to the official expolorer for The New York Times Best Seller
        List explorer.
      </h1>
      <h2>We hope you enjoy your stay!</h2>
      <br />
      <h1>뉴욕 타임즈 베스트셀러 목록 공식 탐색기에 오신 것을 환영합니다.</h1>
      <h2>즐거운 시간 되시길 바랍니다!</h2>
      <style jsx>{`
        .aboutContainer {
          margin: auto;
          max-width: 50%;
        }
        .aboutUs {
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
}
