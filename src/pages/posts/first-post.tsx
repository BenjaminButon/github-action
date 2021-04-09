import Link from 'next/link'

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <p>Back to home</p>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost
