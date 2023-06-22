import { useRouter } from "next/router";
import Seo from "@/Components/Seo";

// https://books-api.nomadcoders.workers.dev/

export default function IndexPage({ results }) {
  const router = useRouter();

  const onClick = (id) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className={"maincontainer"}>
      <Seo title="Home" />
      {!results && <h1>로딩중...</h1>}
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>

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
        .maincontainer {
          left: 0;
          right: 0;
          margin: auto;
          max-width: 70%;
        }
        .bookList {
          display: flex;
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
