import { useRouter } from "next/router";
import Seo from "@/Components/Seo";

export default function IndexPage({ results }) {
  const router = useRouter();

  const onClick = (id) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className={"mainContainer"}>
      <Seo title="Home" />
      {!results && <h1>로딩중...</h1>}
      <h1 className={"title"}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>

      {results?.map((bookList) => (
        <span
          onClick={() => onClick(bookList.list_name_encoded)}
          className="bookList"
          key={bookList.list_name_encoded}
        >
          <h4>{`${bookList.display_name}`} &rarr;</h4>
        </span>
      ))}
      <style jsx>{`
        .mainContainer {
          left: 0;
          right: 0;
          margin: auto;
          max-width: 65%;
        }
        .title {
          font-size: 3rem;
        }
        .bookList {
          font-size: 1.3rem;
          cursor: pointer;
          border: 2px solid #ffffff;
          border-radius: 20px;
          padding: 0px 30px;
          margin: 20px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: { results },
  };
}
