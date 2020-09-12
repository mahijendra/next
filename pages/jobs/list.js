import useSWR from "swr";
import Link from "next/link";
import Navbar from "../../utils/Navbar";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Jobslist() {
  const { data, error } = useSWR("/api/jobs/list", fetcher);
  console.log(data);
  console.log(error);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <Navbar />
      <div>
        {data.map((job) => {
          return (
            <Link href={`/jobs/${job.id}`}>
              <a
                style={{
                  display: "block",
                  margin: "40px 0",
                  padding: "20px",
                  border: "1px solid gray"
                }}
              >
                <span> {job.title}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Jobslist;
