import React, {useState} from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

function LabeledValue(props: {label: string; value: string | number}) {
  return (
    <View style={[{flexDirection: 'column', height: 120}]}>
      <View style={styles.labelView}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.labelView}>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </View>
  );
}

function App(): React.JSX.Element {
  const window = useWindowDimensions();
  const windowHeight = Math.round(window.height);
  const [height, setHeight] = useState<number | undefined>(undefined);
  return (
    <View
      onLayout={(e: LayoutChangeEvent) => {
        setHeight(Math.round(e.nativeEvent.layout.height));
      }}
      style={[
        {flexDirection: 'column'},
        {backgroundColor: windowHeight === height ? '#cfc' : '#fcc'},
        {
          // position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
        },
      ]}>
      <LabeledValue
        label={'useWindowDimensions().height'}
        value={windowHeight}
      />
      <View style={{height: 200}} />
      <LabeledValue label="height" value={height ? height.toString() : 'N/A'} />
    </View>
  );
}
const styles = StyleSheet.create({
  labelView: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    color: 'black',
    fontSize: 20,
  },
  value: {
    color: 'black',
    fontSize: 50,
  },
});

export default App;
