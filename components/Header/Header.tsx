import Link from "next/link";
import css from "./Header.module.css";

export default async function Header() {

  return (
    <header className={css.header}>
        <div className={css.container}>
            <Link href="/" className={css.logo} aria-label="The Duckling's Den-Home">Схованка Каченяти</Link>
                
            <nav className={css.nav} aria-label="Navigation">
                {/* <ul className={css.navigation}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/catalog">Catalog</Link></li>
                </ul> */}
            </nav>
        </div>
    </header>
  );
}