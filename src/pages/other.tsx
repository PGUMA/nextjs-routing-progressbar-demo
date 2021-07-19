import Link from 'next/link'

const Other: React.VFC = () => {
  return (
    <div>
      <h1>別ページ</h1>
      <Link href="/">
        <a>スタートページへ遷移する</a>
      </Link>
    </div>
  )
}

export default Other
