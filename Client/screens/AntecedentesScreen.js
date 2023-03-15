import React from "react";
import {View} from "react-native";
import inputsFromJson from "../assets/data/jsons/Antecedentes.json";
import {ButtonCom} from "../components/ButtonCom";
import {useAntecedentes} from "../hooks/useAntecedentes";
import {useWhatComWillUse} from "../hooks/useWhatComWillUse";
import EStyleSheet from "react-native-extended-stylesheet";
import {FooterCom} from "../components/FooterCom";

export const AntecedentesScreen = ({ editable = true }) => {
  const { diseases, setDiseases, saveOnDB, loading } = useAntecedentes();
  const { inputs } = useWhatComWillUse(inputsFromJson, diseases, setDiseases);

  return (
    <View pointerEvents={editable ? "auto" : "none"}>
      <View style = {styles.content}>
        <View style = {{ marginBottom: 20 }}>
          {inputs.map((input) => input.render)}
        </View>
        {editable && !loading && (
          <View style = {{ alignItems: "center" }}>
            <ButtonCom text = {"Actualizar datos"} onPress = {saveOnDB} />
          </View>
        )}
      </View>
      {editable && (
        <FooterCom />
      )}
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
    fontSize: 30,
    fontWeight: "700",
    color: "#666666",
    marginBottom: 10,
  },
});
