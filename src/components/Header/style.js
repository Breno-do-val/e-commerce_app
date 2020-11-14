import { StyleSheet } from 'react-native';
import { measures, colors, fonts } from '../../styles';

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: measures.headerHeight,
        paddingTop: measures.padding,
        paddingHorizontal: measures.padding,
        justifyContent: 'space-between',
        backgroundColor: colors.base
    },

    cartContainer: {
        flexDirection: 'row',
        padding: measures.padding
    },

    baseStyle: {
        fontSize: fonts.big,
        color: colors.white
    },

    text: {
        position: 'absolute',
        right: 0,
        top: 2,
        fontSize: fonts.small
    }
    
})

export default style;