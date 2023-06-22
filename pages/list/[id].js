import { useRouter } from "next/router";
import { Link } from "next/link";

export default function Detail({ results, id }) {
  return (
    <div>
      {!results && <h1>로딩중...</h1>}
      {results?.books?.map((book) => (
        <div key={book.rank}>
          <img
            src={`https://storage.googleapis.com/du-prd/books/images/${book.primary_isbn13}.jpg`}
          />
          <h1>{book.title}</h1>
          <h4>{book.author}</h4>
          <button>
            <a href={`${book.amazon_product_url}`} target="_blank">
              Buy Now &rarr;
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return {
    props: {
      results,
      id,
    },
  };
}
