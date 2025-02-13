import Image from "next/image";
import styles from "./itemCard.module.css";
import Pao from "../../assets/img_item/image 2.png";

export default function ItemCard({ name, image, description, price }: any) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemInfo}>
        <Image src={Pao} alt={name} className={styles.itemImage} />
        <div>
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.itemDescription}>{description}</p>
        </div>
      </div>
      <p className={styles.itemPrice}>{price}</p>
    </div>
  );
}
