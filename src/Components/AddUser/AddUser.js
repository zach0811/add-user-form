import styles from "./AddUser.module.css";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export const AddUser = () => {
  return (
    <div>
      <Card>
        <form>
          <input></input>
          <input></input>
        </form>
      </Card>
      <Button>Add User</Button>
    </div>
  );
};
