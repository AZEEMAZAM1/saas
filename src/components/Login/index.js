import React from 'react'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { View, Text,Image } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core';
import { REGISTER } from '../../constants/routeNames';



const LoginComponent = () => {
  const {navigate}=useNavigation();
    return (
        <Container>
          <Image 
          height={70} 
          width={70} 
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}/>
          <View>
          <Text style={styles.title}>Welcome to my Academy</Text>
          <Text style={styles.subTitle}>Please login here</Text>

          <View style={styles.form}>

          <Input 
        label="Username"
      iconPosition="right"
      placeholder="Enter Username"
      />
      <Input
      label="Password"
      placeholder="Enter Username"
      secureTextEntry={true}
      icon={<Text>Show</Text>}
      iconPosition="right"
       />
     
     </View>
      
     
      <CustomButton primary title="Submit"  />
      <View style={styles.createSection}>

        <Text style={styles.infoText}>Need a new account?</Text>
        <TouchableOpacity onPress={()=>{
          navigate(REGISTER);
          }}>
          <Text style={styles.linkBtn}>Register</Text>
        </TouchableOpacity>
      </View>
          </View>
        
      
</Container>

    )
}

export default LoginComponent
