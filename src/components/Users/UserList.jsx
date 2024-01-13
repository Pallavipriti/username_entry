import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.data.map((user, index) => {
          return (
            <li key={index}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
