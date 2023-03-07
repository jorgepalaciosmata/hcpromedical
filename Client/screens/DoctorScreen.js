import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import { Transition, Transitioning } from 'react-native-reanimated';
import { AntecedentesScreen } from './AntecedentesScreen';
import { DocumentsViewScreen } from './DocumentsViewScreen';
import PersonalInfoScreen from './PersonalInfoScreen'

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

const componentes = [
  {component: <AntecedentesScreen editable={false}/>, name: "Antecedentes"},
  {component: <DocumentsViewScreen />, name: "Documentos"},
  {component: <PersonalInfoScreen editable={false}/>, name: "Personal"}
]

export const DoctorScreen = () => {
  const [indexMap, setIndexMap] = React.useState({});
  const ref = React.useRef();

  React.useEffect(() => {
    const newIndexMap = {};
    componentes.forEach((component) => {
      newIndexMap[component.name] = false;
    });
    setIndexMap(newIndexMap);
  }, []);

  const handlePress = (name) => {
    ref.current.animateNextTransition();
    setIndexMap((prevIndexMap) => ({
      ...prevIndexMap,
      [name]: !prevIndexMap[name],
    }));
  };

  return (
    <SafeAreaView>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}
      >
        {componentes.map((component, index) => (
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => handlePress(component.name)}
              style={styles.card}
              activeOpacity={0.9}
            >
              <Text style={styles.heading}>{component.name}</Text>
            </TouchableOpacity>
            {indexMap[component.name] && (
              <View style={styles.subCategoriesList}>
                {component.component}
              </View>
            )}
          </View>
        ))}
      </Transitioning.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});
