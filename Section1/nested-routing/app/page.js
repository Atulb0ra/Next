import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>My Home page</h1>
    <Link href="/about"> About</Link> <Link href="/services"> Services</Link>
    </>
  );
}
