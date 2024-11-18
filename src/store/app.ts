import { action, observable } from "mobx"
import { IAppBaseStore } from "./IBaseAppStore"
import { AppStoreType } from "./index"

class AppStore extends IAppBaseStore {

  _rootStore: AppStoreType
  
  @observable
  public _isReady = false
  
  constructor(rootStore: AppStoreType) {
    super()
    this._rootStore = rootStore
  }

  protected __init__() {}
  
  @action
  public async initialize() {
    this._isReady = true;
    return true
  }

}

export default AppStore