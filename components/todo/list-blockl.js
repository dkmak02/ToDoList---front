import AddList from "./add-list";
import Backdrop from "../auth/backdrop";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import c from "./list-block.module.css";
import ListItem from "./list-item";
function ListBlock() {
  const token = "";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/api/v1/lists", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.data.lists);
        console.log(res.data.lists);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  const [backdrop, setBackdrop] = useState(false);
  const [addList, setAddList] = useState(false);
  function backdropHandler() {
    setBackdrop(false);
    setAddList(false);
  }
  function addListHandler() {
    setBackdrop(true);
    setAddList(true);
  }

  return (
    <Fragment>
      <button onClick={addListHandler}>xd</button>
      <div className={c.container}>
        <div className={c.item}>
          <ul className={c.task}>
            {data.map((item) => (
              <ListItem
                key={item.name}
                name={item.name}
                items={item.activities}
                _id={item._id}
              />
            ))}
          </ul>
        </div>
      </div>
      {backdrop && <Backdrop onCancel={backdropHandler} />}
      {addList && <AddList onCancel={backdropHandler} />}
    </Fragment>
  );
}
export default ListBlock;
