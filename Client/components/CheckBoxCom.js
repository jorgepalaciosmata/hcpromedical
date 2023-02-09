import React, {useState, useContext, useEffect} from 'react';
import {View, CheckBox, Text, StyleSheet} from 'react-native';
import { diseasesContext } from '../screens/AntecedentesScreen';

const CheckBoxCom = ({content} ) => {

  const { diseases, updateDiseases} = useContext( diseasesContext );
  const [isSelected, setSelection] = useState(false);
  
  setTimeout(() => {
    if ( diseases[content.name] )
    setSelection(diseases[content.name])
  }, 10);

  const setData = () => {
    setSelection(!isSelected)
    updateDiseases(content.name, !isSelected)

  }

  
  return (
    <View style={styles.container}>
      <CheckBox
        value={ isSelected }
        onValueChange={setData}
      />
      <Text style={styles.text}>{content.display}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    alignItems: 'left',
    flexDirection: "row"
  },
  text: {
    marginLeft: 4,
    fontWeight: "100",
    fontSize: 16,
    color: "#666666",
  },
})
export default CheckBoxCom;