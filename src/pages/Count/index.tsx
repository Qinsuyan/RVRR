import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.less";
import { StoreType } from "@/store";
import { add } from "@/store/count";
function App() {
  const count = useSelector<StoreType, number>((state) => state.count.count);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(1))
  }
  const handleMinus = () => {
    dispatch(add(-1))
  }
  return (
    <div className={styles.count}>
      {count}
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleMinus}>MINUS</button>
    </div>
  );
}

export default App;