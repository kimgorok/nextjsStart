import NavBar from "./NavBar";

export default function Layout({ children }) {
  // 레이아웃의 children으로 <Component {...pageProps} />에 다른 페이지들이 들어가게 함
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
