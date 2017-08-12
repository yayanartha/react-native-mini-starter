import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';

class LoadingLightBox extends PureComponent {
    render() {
        return (
            <View style={[s.flx_row, s.asc, s.aic, s.jcc, { width: 150, padding: 16, borderRadius: 5,
                backgroundColor: 'rgba(0,0,0,0.5)',
            }]}>
                <ActivityIndicator color="#fff"/>
                <Text style={[s.ff_roboto, s.white, { marginLeft: 16 }]}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
};

LoadingLightBox.propTypes = {
    text: PropTypes.string.isRequired,
};
LoadingLightBox.defaultProps = {
    text: 'Loading...',
};

export default LoadingLightBox;
