import React from 'react';

import {View, TextInput,Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import colors from '../../assets/theme/colors';
import CustomButton from '../../components/common/CustomButton/index';
import LoginComponent from '../../components/Login';

const Login=()=> {
    const [value,onChangeText]= React.useState('');
    return (
//<Login/>
<LoginComponent/>
    );
};

export default Login;