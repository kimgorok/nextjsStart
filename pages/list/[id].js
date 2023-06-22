export default function Detail({ results, id }) {
  return (
    <div className={"listContainer"}>
      {!results && <h1>로딩중...</h1>}
      <h1 className={"bookTitle"}>{results.list_name} Books</h1>
      <div className={"bookList"}>
        {results?.books?.map((book) => (
          <div className={"bookCard"} key={book.rank}>
            <img
              src={`https://storage.googleapis.com/du-prd/books/images/${book.primary_isbn13}.jpg`}
            />
            <h1>{book.title}</h1>
            <h3 className={"authorName"}>{book.author}</h3>
            <div className={"buyNowButton"}>
              <a href={`${book.amazon_product_url}`} target="_blank">
                Buy Now &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .listContainer {
          margin: auto;
          max-width: 80%;
          text-align: center;
        }

        .bookTitle {
          margin: 50px;
        }

        .bookList {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 50px;
        }

        .bookCard {
          border-bottom: 1px solid #f3ffac;
          padding-bottom: 20px;
        }
        .bookCard img {
          position: relative;
          width: 323px;
          height: 500px;
        }

        .bookCard img:hover {
          transform: translateY(-15px);
        }

        .authorName {
          font-size: 1.3rem;
          color: #4dd5ff;
        }

        .buyNowButton {
          font-size: 1.5rem;
          background-color: black;
          border: 2px solid #ffffff;
          padding: 5px 30px;
          display: inline-block;
        }
      `}</style>
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
