import React from 'react'
import { View, Text, TextInput,ActivityIndicator,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'
import colors from '../../../assets/theme/colors';

import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const CustomButton = ({  
    title , 
    secondary,
    primary,
    danger,
    disabled,
    loading,
    onPress,
    
    
}) => {
    
    

    
    const getBgColor=()=>{

  
        if(disabled){
            return colors.grey;
        }

        if(primary){
            return colors.primary;
        }
   
        if(danger){
            return colors.danger;
        }

        if(secondary){
            return colors.secondary;
        }
    };
    return (
        <TouchableOpacity
        disabled={disabled} 
        onPress={onPress}
        style={[styles.wrapper,{backgroundColor:getBgColor()}]}> 
        <View style={styles.loaderSection}>

            {loading &&<ActivityIndicator color={primary?colors.secondary: colors.primary}/>}
            {title&&(
            <Text style={{color:disabled?'black':colors.white, paddingLeftL:loading?5:0}}>{title}</Text>
            )}
        </View>
        </TouchableOpacity>
    );
};
  
export default CustomButton;
