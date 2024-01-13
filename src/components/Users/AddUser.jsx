import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [error, setError] = useState(null);
  const enteredUsername = useRef();
  const enteredAge = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      username: enteredUsername.current.value,
      age: enteredAge.current.value,
    };

    if (userInput.username === "" || userInput.age === "") {
      setError({
        title: "Invalid Details",
        message: "Please fill all the details",
      });
      return;
    }

    if (userInput.age <= 17) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>18)",
      });
      return;
    }

    props.onUserInput(userInput);
    enteredUsername.current.value = "";
    enteredAge.current.value = "";
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorhandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUsername} />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
