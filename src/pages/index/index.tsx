import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../hooks";

import "./index.less";

function Index() {
  const rootStore = useAppStore();

  return (
    <View className='index'>
      <Text>{rootStore.app._isReady ? "应用已就绪" : "应用未就绪"}</Text>
    </View>
  );
}

export default observer(Index);
