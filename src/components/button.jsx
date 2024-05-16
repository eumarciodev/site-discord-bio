import Styles from "./button.module.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <div>
      <Link className={Styles.Link_button} to="/perfil">
        click here
      </Link>
    </div>
  );
}
