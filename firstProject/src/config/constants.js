import {Dimensions} from 'react-native';
const config={
    SCREEN_WIDTH: Dimensions.get(window).width,
    SCREEN_HEIGHT: Dimensions.get(window).height,
    HEADER_HEIGHT: Dimensions.get(window).height -45,
};
const strings={
    PASSWORD: 'password',
    USERNAME:'ingrese usuario',
    TITLE_BUTTON: 'Login',

}
export default{
    CONFIG: config,
    STRINGS: strings,
}
