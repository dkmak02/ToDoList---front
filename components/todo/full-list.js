import Backdrop from "../auth/backdrop";
import c from "./full-list.module.css";
function FullList(props) {
  let i = 0;
  return (
    <div className={c.modal1}>
      <div className={c.content}>
        {props.name}
        <ul className={c.task}>
          {props.items.map((item) => (
            <li key={i++}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default FullList;
