import React from "react";
import {View, Text} from "react-native";
import antecedentesInputsModel from "../assets/data/jsons/Antecedentes.json";
import habitsInputsModel from "../assets/data/jsons/Habits.json";
import measurementsInputsModel from "../assets/data/jsons/Measurements.json";
import {ButtonCom} from "../components/ButtonCom";
import {useAntecedentes} from "../hooks/useAntecedentes";
import {useWhatComWillUse} from "../hooks/useWhatComWillUse";
import EStyleSheet from "react-native-extended-stylesheet";
import {FooterCom} from "../components/FooterCom";

export const AntecedentesScreen = () => {
  const { 
    diseases, 
    setDiseases, 
    habits, 
    setHabits,
    measurements, 
    setMeasurements,
    saveOnDB, 
    loading } = useAntecedentes();

  const inputs = useWhatComWillUse(antecedentesInputsModel, diseases, setDiseases);
  const habitInputs  = useWhatComWillUse(habitsInputsModel, habits, setHabits);
  const measurementsInputs  = useWhatComWillUse(measurementsInputsModel, measurements, setMeasurements);

  return (
    <View>
        <View style = {styles.content}>
            {/* Estatura y peso */}
            <Text style={styles.titleText}>
                Estatura y peso
            </Text>
            <View style = {styles.sectionContainer}>
                {measurementsInputs.map((input) => input.render)}
            </View>

            {/* Hábitos */}
            <Text style={styles.titleText}>
                Hábitos
            </Text>
            <View style = {styles.sectionContainer}>
                {habitInputs.map((input) => input.render)}
            </View>

            {/* Antecedentes */}
            <Text style={styles.titleText}>
                Antecedentes
            </Text>
            <View style = {styles.sectionContainer}>
                {inputs.map((input) => input.render)}
            </View>


            <View style = {{ alignItems: "center" }}>
                <ButtonCom text = {"Actualizar datos"} onPress = {saveOnDB} />
            </View>
        </View>

        {/* Footer */}
        <FooterCom />
    </View>
  );
};

const styles = EStyleSheet.create({
  content: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: '40px'
  }
});
