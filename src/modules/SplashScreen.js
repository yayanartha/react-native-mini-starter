import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UniText } from './_global';

class SplashScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <View style={[s.flx_i, s.aic, s.jcc, s.bg_white]}>
                <UniText.Regular>Splash Screen</UniText.Regular>
            </View>
        );
    }
}

SplashScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
    checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
