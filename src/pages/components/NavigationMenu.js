import Link from "next/link";

const NavigationMenu = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link href="/" passHref legacyBehavior>
            <a className="link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/HighScorePage" passHref legacyBehavior>
            <a className="link">High Scores</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;