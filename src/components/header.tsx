import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      className="flex m-6 fixed border-solid border-opacity-30 border-black border drop-shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl bg-white bg-opacity-5"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="z-10">
        <nav>
          <ul className="flex gap-10 p-2 px-6">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="text-white">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/article" className="text-white">
                Article
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto z-0 drop-shadow-xl rounded-3xl"></div>
    </header>
  );
};

export default Header;
