import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../utils/Navbar";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Jobslist() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, ...rest } = useSWR(`/api/jobs/${id}`, fetcher);
  console.log(rest, data, error);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "block",
          margin: "40px 0",
          padding: "20px",
          border: "1px solid gray"
        }}
      >
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default Jobslist;
