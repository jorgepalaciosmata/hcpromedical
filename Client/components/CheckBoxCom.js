import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const CheckBoxCom = ({options}) => {
  
  const [diseases, setDiseases] = useState([]);

  const selectOption = (option)=>{
    if (diseases.includes(option)) {
      setDiseases(diseases.filter(diseases => diseases !== option));
      return;
    }

    setDiseases( diseases => diseases.concat(option));

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione sus enfermedades: </Text>
      <View style={styles.options}>
        {
          options.map( option =>
            <View key={option} style={styles.option}>
              <TouchableOpacity 
                style={styles.checkbox} 
                onPress={() => selectOption(option)}>
                {diseases.includes(option) && <Text style={styles.check}>x</Text>}
              </TouchableOpacity>
              <Text style={styles.optionText}>{option}</Text>
            </View>
            )
        }
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: '600',
  },
  options: {
    alignSelf: 'flex-start',
    marginLeft: 50,

  },
  option: {
    flexDirection: 'row',
    marginVertical: 10,

  },
  checkbox: {
    width:25,
    height:25,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 5,
  },
  optionText: {
    textTransform: 'capitalize',
    fontSize: 16,

  },
  check: {
    alignSelf: 'center',
  }
});

export default CheckBoxCom;