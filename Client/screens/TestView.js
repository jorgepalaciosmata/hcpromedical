import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { CalendarCom } from '../components/CalendarCom';

const TestView = () => {
const [selectedStartDate, setSelectedStartDate] = useState(null);

const onDateChange = date => {
  setSelectedStartDate(date);
};

const startDate = selectedStartDate ? selectedStartDate.toString() : '';

return (
<>
<CalendarCom />
</>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
marginTop: 100,
},
});

export default TestView;