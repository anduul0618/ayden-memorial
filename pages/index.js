import Link from 'next/link'
export default function Home() {
  return (
<Link
      href={{
        pathname: 'https://www.tiktok.com/@ranengan/video/6696371818619473157',
        query: { name: 'test' },
      }}
    >
      The Memorial of Ayden-Anand ToT
    </Link>
  );
}
