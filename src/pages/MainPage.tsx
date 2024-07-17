import { useContext } from "react";

import TextInput from "../components/TextInput";
import DataContext from "../store";

const MainPage: React.FC = () => {
  const data = useContext(DataContext);

  return (
    <>
      <TextInput/>
      <div>
        {data.fetchedData.length ? (
          <>
            <h1>Your search results: </h1>
            {data.fetchedData.map((elem, index) => <p key={index}>{elem}</p>)}
          </>
        ) : (
          <p>Your search results will appear here</p>
        )}
      </div>
    </>
  );
};

export default MainPage;
