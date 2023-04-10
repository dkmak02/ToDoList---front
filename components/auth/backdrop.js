import c from "./login.module.css";
function Backdrop(props) {
  return <div className={c.modal} onClick={props.onCancel} />;
}
export default Backdrop;
