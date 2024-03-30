import Image from "next/image";
import Link from "next/link";
import style from '../app/style.css'
export default function Home() {
  return (
    <main>
      <nav className="mainnav nav">
        <ul>
          <Link  href="/"><li>Home</li> </Link>
          <Link  href="/about"><li>About</li> </Link>
          <Link  href="/blog"><li>Blog</li> </Link>
          <Link  href="/contact"><li>Contact</li> </Link>
        </ul>
      </nav>
      <h1 className="text-center font-extrabold text-6xl">Hunting Coder</h1>
      <p className="text-center mt-10 ">
        A blog for hunting coders by a hunting coder
      </p>

      <div className="blogs text-center mt-20 ">
        <h2>Popular Blogs</h2>
        <div className="blogItem">
          <h1 className="text-2xl font-bold">
            How to learn Javascript in 2024
          </h1>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h1 className="text-2xl font-bold">
            How to learn Javascript in 2024
          </h1>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h1 className="text-2xl font-bold">
            How to learn Javascript in 2024
          </h1>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
    </main>
  );
}
