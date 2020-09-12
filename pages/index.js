import Link from "next/link";
import Navbar from "../utils/Navbar";

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
