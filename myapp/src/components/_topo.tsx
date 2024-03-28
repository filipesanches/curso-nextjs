import Link from 'next/link';

export default function Topo() {
  return (
    <>
      <div className="topo">
        <div>
          <h1>myapp</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/users">Usuaários</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </>
  );
}
