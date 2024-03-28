import { StyleSheet, View, Button, TextInput, Alert} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [inputName, onChangeInputName] = React.useState('');
  const [inpuDOB, onChangeInputDoB] = React.useState('');
  const [inpuCode, onChangeInputCode] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput style = {styles.input} onChangeText={onChangeInputName} value={inputName} placeholder='Nhap ten ban vao dayyyyyy' />
      <Button title="Add Student" onPress={addStudent} />
      <Button title="Update Student" onPress={updateStudent} />
      <Button title="Delete Student" onPress={deleteStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    padding: 5,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

});

const updateStudent = async () => {
  try {
      const response = await axios.put('http://demo-api.stecom.vn:8888/api/student/update', {
        "name": "PCCCC",
        "dateOfBirth": "2024-03-26T09:37:18.901Z",
        "studentCode": "232132312",
        "studentId": 113,
      });
      console.log(response.data);
      // Thêm mã logic xử lý sau khi thêm thành công
  } catch (error) {
      console.error('Error adding student:', error);
      // Xử lý lỗi nếu có
  }
};

const addStudent = async () => {
  try {
      const response = await axios.post('http://demo-api.stecom.vn:8888/api/student/create-student', {
        "name": "Khoa dz",
        "dateOfBirth": "2024-03-26T09:37:18.901Z",
        "studentCode": "2321323134",
      });
      console.log(response.data);
      // Thêm mã logic xử lý sau khi thêm thành công
  } catch (error) {
      console.error('Error adding student:', error);
      // Xử lý lỗi nếu có
  }
};

const deleteStudent = async () => {
  try {
      const response = await axios.delete('http://demo-api.stecom.vn:8888/api/student/delete/121', {
      });
      console.log(response.data);
      // Thêm mã logic xử lý sau khi thêm thành công
  } catch (error) {
      console.error('Error adding student:', error);
      // Xử lý lỗi nếu có
  }
};

export default App;

