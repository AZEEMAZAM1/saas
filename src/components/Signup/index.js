import React from 'react'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton/index';
import styles from './styles';
import { View, Text,Image } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core';
import {LOGIN} from '../../constants/routeNames'
import { error } from 'console';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate}=useNavigation();
    return (
        <Container>
          <Image 
          height={70} 
          width={70} 
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

          <View>
          <Text style={styles.title}>Welcome to my Academy</Text>
          <Text style={styles.subTitle}>create a free account</Text>

          <View style={styles.form}>
          <Input 
        label="Username"
        iconPosition="right"
        placeholder="Enter Username"
        error={errors.userName}
        onChangeText={(value)=>{
          onChange({name:'userName',value});
        }}
      />
        <Input 
        label="First name"
      iconPosition="right"
      placeholder="Enter First name"
      onChangeText={(value)=>{
        onChange({name:'firstName',value});
      }}
      error={errors.firstName}
      />
       <Input 
        label="Last Name"
      iconPosition="right"
      placeholder="Enter Last name"
      error={errors.lastName}
      onChangeText={(value)=>{
        onChange({name:'lastName',value});
      }}
      />
       <Input 
        label="Email"
      iconPosition="right"
      placeholder="Enter Email"
     error={errors.email}
     onChangeText={(value)=>{
      onChange({name:'email',value});
    }}
      />
      <Input
      label="Password"
      placeholder="Enter Passward"
      secureTextEntry={true}
      icon={<Text>Show</Text>}
      iconPosition="right"
      error={errors.password}
      onChangeText={(value)=>{
        onChange({name:'password',value});
      }}
       />
     
     
      
     
      <CustomButton onPress={onSubmit} primary title="Submit"  />
      <View style={styles.createSection}>
      <Text style={styles.infoText}>Already have account?</Text>
        <TouchableOpacity 
        onPress={()=>{
          navigate(LOGIN);
          }}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
          </View>
        
      
</Container>

    )
}

export default RegisterComponent
