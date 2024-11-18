import AppStore from "./app";
import UserStore from "./user";

export interface AppStoreType {
  app: AppStore;
  user: UserStore;
}

// @ts-ignore
const rootStore: AppStoreType = {}
const appStore = new AppStore(rootStore);
const userStore = new UserStore(rootStore);

rootStore.app = appStore;
rootStore.user = userStore;

export default rootStore
