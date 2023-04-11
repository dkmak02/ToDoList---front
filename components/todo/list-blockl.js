const dummy_data = [
  {
    name: "Todo List",
    items: ["cos", "cos2", "cos3", "cos", "cos2", "cos3"],
  },
  {
    name: "Todo List2",
    items: ["cos", "cos das dsadasdasddssss dasd", "cos3"],
  },
  {
    name: "Todo List323",
    items: ["cos", "cos2", "cos3"],
  },
  {
    name: "Todo List12",
    items: ["cos", "cos2", "cos3"],
  },
  {
    name: "Todo List4",
    items: [
      "cos",
      "cos2",
      "cos3",
      "cos",
      "cos2",
      "cos3",
      "cos",
      "cos2",
      "cos3",
      "sda",
    ],
  },
];

import c from "./list-block.module.css";
import ListItem from "./list-item";
function ListBlock() {
  return (
    <div className={c.container}>
      <div className={c.item}>
        <ul className={c.task}>
          {dummy_data.map((item) => (
            <ListItem key={item.name} name={item.name} items={item.items} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ListBlock;
