import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={styles.button}
    >
      {props.children}
    </button>
  );
}
