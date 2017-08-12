import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import UniButton from './UniButton';
import * as UniText from './UniText';
import { colors } from '../../constants';

const BottomButtonBar = (props) => {
    return (
        <UniButton action={props.action} params={props.params}>
            <View style={[s.aic, s.jcc, { height: 55, backgroundColor: props.bgColor }]}>
                <UniText.H1 color={props.color} noBold>
                    {props.title}
                </UniText.H1>
            </View>
        </UniButton>
    );
};

BottomButtonBar.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
BottomButtonBar.defaultProps = {
    bgColor: colors.TEAL,
    color: '#fff',
};

export default BottomButtonBar;
