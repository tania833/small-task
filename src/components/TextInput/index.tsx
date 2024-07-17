import { FormEvent, useContext } from "react";

import DataContext, { IContext } from "../../store";

import styles from "./index.module.css";
import { fetchData } from "../../api";

const TextInput: React.FC = () => {
  const store: IContext = useContext(DataContext);

  const onSubmitFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const data = new FormData(e.currentTarget);
    // const searchInput = data.get("form-input");

    let fetchedData = await fetchData();

    if (fetchedData && fetchedData.data.length) {
      const mappedData: string[] = fetchedData.data.map(
        (el: { title: string }) => el.title
      );

      store.setData(mappedData);
    }
  };
  return (
    <form
      method="get"
      onSubmit={onSubmitFunction}
      className={styles.searchForm}
    >
      <input
        type="text"
        name="form-input"
        placeholder="Please, type your request"
        required
        className={styles.formInput}
      ></input>
      <button type="submit" className={styles.formButton}>
        Search
      </button>
    </form>
  );
};

export default TextInput;
