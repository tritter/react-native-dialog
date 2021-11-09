import * as React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  visible: boolean;
  children: any;
}

const WindowsModal: React.FC<Props> = (props) => {
  if (!props.visible) return <View />;
  return <View style={styles.modal}>{props.children}</View>;
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WindowsModal;
