import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  return (
    <nav className={"navBar"}>
      <div className={"container"}>
        <Link legacyBehavior href="/">
          <a className={"home"}>Home</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={"about"}>About</a>
        </Link>
      </div>

      <style jsx>{`
        .navBar {
          width: 100%;
          position: fixed;
          top: 0;
          background-color: black;
          border-bottom: 5px solid #f3ffac;
          z-index: 1;
          box-sizing: border-box;
          padding: 20px;
        }

        .container {
          font-size: 2rem;
          display: flex;

          margin-bottom: 10px;
        }
        .home {
          margin-right: auto;
        }
        .about {
          margin-left: auto;
        }
      `}</style>
    </nav>
  );
}
