import styles from "./chip.module.css";

interface ChipProps {
  name: string;
}

export default function Chip({ name }: ChipProps) {
  return <div className={styles.chip}>{name}</div>;
}
