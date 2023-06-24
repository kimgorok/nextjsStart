import styles from "/Components/IdCSS.module.css";
import { motion } from "framer-motion";
import Seo from "@/Components/Seo";

export default function Detail({ results }) {
  return (
    <div className={styles.listContainer}>
      <Seo title={results.list_name} />
      {!results && <h1>로딩중...</h1>}
      <h1 className={styles.bookTitle}>{results.list_name} Books</h1>
      <div className={styles.bookList}>
        {results?.books?.map((book, index) => (
          <motion.div
            className={styles.bookCard}
            key={book.rank}
            variants={DetailListVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover="hover"
          >
            <img
              alt="이미지 없음"
              src={`https://storage.googleapis.com/du-prd/books/images/${book.primary_isbn13}.jpg`}
            />
            <h1>{book.title}</h1>
            <h3 className={styles.authorName}>
              by {book.author} | {book.publisher}
            </h3>
            <motion.div
              className={styles.buyNowButton}
              variants={BuyNowVariants}
              whileHover="hover"
            >
              <a href={`${book.amazon_product_url}`} target="_blank">
                Buy Now &rarr;
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const DetailListVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.07,
    },
  }),
  hover: {
    x: 10,
    y: 15,
    boxShadow: 0,
  },
};

export const BuyNowVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.1,
    },
  },
};

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
