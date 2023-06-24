import { useRouter } from "next/router";
import Seo from "@/Components/Seo";
import { motion } from "framer-motion";
import styles from "../Components/IndexCSS.module.css";

export default function IndexPage({ results }) {
  const router = useRouter();

  const onClick = (id) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className={styles.mainContainer}>
      <Seo title="Home" />
      {!results && <h1>로딩중...</h1>}
      <h1 className={styles.title}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>

      {results?.map((bookList, index) => (
        <motion.span
          onClick={() => onClick(bookList.list_name_encoded)}
          className={styles.bookList}
          key={bookList.list_name_encoded}
          initial="hidden"
          animate="visible"
          variants={BookListVariants}
          custom={index}
          whileHover="hover"
          whileTap="tap"
        >
          <h4>{`${bookList.display_name}`} &rarr;</h4>
        </motion.span>
      ))}
    </div>
  );
}

export const BookListVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.03,
    },
  }),

  hover: {
    y: -10,
    transition: {
      duration: 0.1,
    },
  },
  tap: {
    backgroundColor: [
      "rgb(220,0,0)",
      "rgb(255,50,0)",
      "rgb(237,210,0)",
      "rgb(0,230,0)",
      "rgb(0,0,200)",
      "rgb(100,0,255)",
    ],
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: { results },
  };
}
