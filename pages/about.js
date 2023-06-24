import Seo from "./../Components/Seo";

export default function About() {
  return (
    <div className={"aboutContainer"}>
      <Seo title="About" />
      <div>About Us</div>
      <h1>
        Welcome to the official expolorer for The New York Times Best Seller
        List explorer.
      </h1>
      <h1>We hope you enjoy your stay!</h1>
      <br />
      <h1>뉴욕 타임즈 베스트셀러 목록 공식 탐색기에 오신 것을 환영합니다.</h1>
      <h1>즐거운 시간 되시길 바랍니다!</h1>
      <style jsx>{`
        .aboutContainer {
          margin: auto;
          max-width: 50%;
        }
        div {
          font-size: 3rem;
        }
        h1 {
          font-size: 2.5rem;
        }
      `}</style>
    </div>
  );
}
