import { useRouter } from "next/router";
import SEO from "@/Components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  return (
    <div>
      <SEO title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
  };
}
export async function getStaticPaths() {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: "blocking", // 다른 경로로의 접근은 서버 사이드에서 대기
  };
}
