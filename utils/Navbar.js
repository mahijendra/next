import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/jobs/list">
        <a>Jobs</a>
      </Link>
    </div>
  );
}
