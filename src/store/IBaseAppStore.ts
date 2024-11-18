
export abstract class IAppBaseStore {
  // 当前 Store 是否已经就绪
  public abstract _isReady: boolean;

  constructor() {
    // 统一在实例化的时候执行的初始化方法
    this.__init__()
  }
  
  // 统一在实例化的时候执行的初始化方法
  protected abstract __init__(): any
  
  // 初始化方法
  public abstract initialize(): Promise<unknown>;
}