import { AppStoreType } from "./index"

class UserStore {
  _rootStore: AppStoreType
  _isReady = false
  constructor(rootStore: AppStoreType) {
    this._rootStore = rootStore
  }
}

export default UserStore