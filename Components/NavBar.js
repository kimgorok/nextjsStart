import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  return (
    <nav>
      <div className={"container"}>
        <Link legacyBehavior href="/">
          <a className={"home"}>Home</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={"about"}>About</a>
        </Link>
      </div>

      <style jsx>{`
        nav {
          border-bottom: 5px solid #f3ffac;
        }

        .container {
          display: flex;
          justify-content: space-between;
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
