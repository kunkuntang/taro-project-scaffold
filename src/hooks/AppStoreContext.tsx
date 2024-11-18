import { createContext, PropsWithChildren, useContext } from "react";
import rootStore, { AppStoreType } from "../store";

// ==== app store hook ====
const AppStoreContext = createContext(rootStore);

export const AppStoreProvider = ({
  children,
  store,
}: PropsWithChildren<{ store: AppStoreType }>) => {
  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useAppStore = () => useContext(AppStoreContext);
