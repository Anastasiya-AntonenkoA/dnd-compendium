import styles from "./page.module.css";
import Link from "next/link";
// import Image from 'next/image';
import {
  GiAngelWings, GiArmorVest, GiBackpack, GiBarbute, GiDualityMask, GiFairyWand,
  GiFangs, GiFamilyTree, GiRoundBottomFlask, GiMagnifyingGlass, GiJigsawPiece, GiRelicBlade,
  GiCampCookingPot
} from "react-icons/gi";
  


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image 
  src="/images/1.png" // Шлях відносно папки public
  alt="Dnd"
  width={1020}    // Вкажи приблизну ширину книги
  height={275}  // Вкажи висоту книги
          priority      // Додай це, якщо картинка знаходиться зверху сторінки (LCP)
          className={styles.label}
/> */}
        {/* <h1>Ви дійшли до схованки каченяти. Можете перепочити на своєму шляху</h1> */}
        
        <nav className={styles.catalog} aria-label="Catalog">
          <ul className={styles.navigation}>
            <li><Link className={`${styles.book} ${styles.race_book}`} href="/race"><span>Народи світу</span><GiAngelWings /></Link></li>
            <li><Link className={`${styles.book} ${styles.classes_book}`} href="/classes"><span>Фахи</span><GiBarbute /></Link></li>
            <li><Link className={`${styles.book} ${styles.background_book}`} href="/background"><span>Передісторія</span><GiFamilyTree /></Link></li>
            <li><Link className={`${styles.book} ${styles.traits_book}`} href="/traits"><span>Риси характеру</span><GiDualityMask /></Link></li>
            <li><Link className={`${styles.book} ${styles.beastiary_book}`} href="/beastiary"><span>Бестіарій</span><GiFangs /></Link></li>
            <li><Link className={`${styles.book} ${styles.armor_book}`} href="/armor"><span>Обладунки</span><GiArmorVest /></Link></li>
            <li><Link className={`${styles.book} ${styles.weapon_book}`} href="/weapon"><span>Зброя</span><GiRelicBlade /></Link></li>
            <li><Link className={`${styles.book} ${styles.equipment_book}`} href="/equipment"><span>Спорядження</span><GiBackpack /></Link></li>
            <li><Link className={`${styles.book} ${styles.cells_book}`} href="/cells"><span>Чари</span><GiFairyWand /></Link></li>
            <li><Link className={`${styles.book} ${styles.potion_book}`} href="/potion"><span>Зілля</span><GiRoundBottomFlask /></Link></li>
            <li><Link className={`${styles.book} ${styles.cookbook_book}`} href="/cookbook"><span>Кулінарна книга</span><GiCampCookingPot /></Link></li>
            <li><Link className={`${styles.book} ${styles.random_book}`} href="/random"><span>Випадковики</span><GiJigsawPiece /></Link></li>
            <li><Link className={`${styles.book} ${styles.faq_book}`} href="/faq"><span>Правила</span><GiMagnifyingGlass /></Link></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
