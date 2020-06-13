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
    TITLE_PDM:'PDM',
    DESC_PDM:'programacion de Dispositivos moviles - Unifranz',
    TITLE_HIT: 'DEFENSA HITO 3',
    DESC_HIT:'Univ: Joel Arancibia Gestion 2020',
    TITLE_FIRE: 'FIREBASE',
    DESC_FIRE:'Integracion de React Native con Firebase',
    NEXT_BUTTON:'Next',
    PREV_BUTTON: 'Prev',
    SKIP_BUTTON: 'SKIP',
};
export default{
    CONFIG: config,
    STRINGS: strings,
};
