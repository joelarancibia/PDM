import {Dimensions} from 'react-native';
const config={
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height -45,
};
const strings={
    NAME_APP: 'GooWia Solutions',
    PASSWORD: 'Password',
    USERNAME: 'Username',
    TITLE_BUTTON: 'LOG IN',
    REGISTER: 'Register',
    EMAIL: 'Email',
    EMAIL_ERROR: 'Email invalid!',
    PASSWORD_ERROR: 'Password invalid!',
    EMPTY_TITLE: 'Review Email/Password values',
    EMPTY_VALUES: 'Empty values detected',
}
export default{
    CONFIG: config,
    STRINGS: strings,
}
