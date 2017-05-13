import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containterStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containterStyle: {
    borderWidth: 1,
    // rounded corners
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevetion: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
