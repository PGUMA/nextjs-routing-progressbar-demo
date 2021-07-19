import Link from 'next/link'

const Index: React.VFC = () => {
  return (
    <div>
      <h1>スタートページ</h1>
      <Link href="/other">
        <a>別ページへ遷移する</a>
      </Link>
    </div>
  )
}

export default Index
