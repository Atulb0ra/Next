import Link from "next/link"

function page() {
  return (
    <>
      <h1>My services</h1>
      <p>
        <Link href="/services/web-dev">web-dev service</Link>
      </p>
      <p>
        <Link href="/services/java-dev">java-dev service</Link>
      </p>
    </>
  )
}

export default page
