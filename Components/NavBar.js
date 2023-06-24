import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={"navBar"}>
      <div className={"container"}>
        <Link legacyBehavior href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
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
          justify-content: space-around;
        }
        .a {
          text-decoration: none;
        }
        .active {
          color: #09ff00;
        }
      `}</style>
    </nav>
  );
}
