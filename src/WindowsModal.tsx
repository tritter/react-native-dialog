import * as React from "react";
import { Component } from "react";
import { StyleSheet, View } from 'react-native'

interface Props {
    visible: boolean;
    children: object;
  }

class WindowsModal extends Component<Props, {}> {
  render () {
    if (!this.props.visible) return (<View />)

    return (
      <View style={styles.modal}>
        {this.props.children}
      </View>
    )
  }
}
const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default WindowsModal;
