import c from "./list-item.module.css";
import FullList from "./full-list";
import { useState } from "react";
import Backdrop from "../auth/backdrop";
import { Fragment } from "react";

function ListItem(props) {
  const [backdrop, setBackdrop] = useState(false);
  const [fullList, setFullList] = useState(false);
  function backdropHandler() {
    setBackdrop(false);
    setFullList(false);
  }
  function fullListHandler() {
    setBackdrop(true);
    setFullList(true);
  }
  let i = 0;
  return (
    <Fragment>
      <li className={c.list} onClick={fullListHandler}>
        <div className={c.title}>
          <h1 className={c.sep}>{props.name}</h1>
        </div>
        <div className={c.list_container}>
          <ul>
            {props.items.map((item) => (
              <li key={i++}>{item}</li>
            ))}
          </ul>
        </div>
      </li>
      {backdrop && <Backdrop onCancel={backdropHandler} />}
      {fullList && <FullList name={props.name} items={props.items} />}
    </Fragment>
  );
}
export default ListItem;
