import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHoraPickerVisible, setHoraPickerVisibility] = useState(false);
  const [dataString, setDataString]=useState('')
  const [horaString, setHoraString]=useState('')
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showHoraPicker = () => {
    setHoraPickerVisibility(true);
  };

  const hideHoraPicker = () => {
    setHoraPickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    const formattedDate =date.getDate().toString().padStart(2, "0") + "/" + ((date.getMonth()+1).toString().padStart(2, "0"))  + "/" + date.getFullYear();
    console.log(formattedDate)
    setDataString(formattedDate)
    hideDatePicker();
  };
  const handleConfirmHora = (time) => {
    console.log(time.toString())
    setHoraString(time.toString())
    hideHoraPicker();
  };

  return (
    <View style={styles.centeredView}>
      <Button title="Calendário" onPress={showDatePicker} />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        //mode="time"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        <DateTimePickerModal
        isVisible={isHoraPickerVisible}
        mode="time"
        //mode="date"
        onConfirm={handleConfirmHora}
        onCancel={hideHoraPicker}
      />
      <Text style={[styles.text]}>Data: {dataString}</Text>

      <Button title="Relógio" onPress={showHoraPicker} />

      <Text style={[styles.text]}>Hora: {horaString}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  text:{
    padding: 10,
  }
});

export default App;