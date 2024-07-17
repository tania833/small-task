import { Context, createContext, useState } from "react";

export interface IContext {
  fetchedData: string[];
  setData: (data: string[]) => void;
}

const DataContext: Context<IContext> = createContext<IContext>({
  fetchedData: [],
  setData: () => {},
});

export const ContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [fetchedData, setFetchedData] = useState<string[]>([]);

  const setData = (data: string[]) =>
    setFetchedData((prevState: string[]) => [...prevState, ...data]);
  
  const context = {
    fetchedData,
    setData,
  };
  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export default DataContext;
