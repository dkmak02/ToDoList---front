import c from "./add-list.module.css";
import { useRef } from "react";
import { useContext } from "react";
function AddList() {
  const nameInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const listData = {
      name: enteredName,
      items: [],
    };
    console.log(listData);
  }
  return (
    <div className={c.modal1}>
      <div className={c.content}>
        <form>
          <div className={c.control}>
            <input
              type="string"
              id="name"
              required
              ref={nameInputRef}
              placeholder="Name"
            />
            <div className={c.actions}>
              <button onClick={submitHandler}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddList;
