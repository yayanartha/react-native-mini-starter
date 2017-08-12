import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UniText } from './_global';
import { checkAuth } from '../actions/action.account';

class SplashScreen extends PureComponent {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.checkAuth(this.props.navigator);
        }, 3000);
    }
    render() {
        return (
            <View style={[s.flx_i, s.aic, s.jcc, s.bg_white]}>
                <UniText.H1>Splash Screen</UniText.H1>
            </View>
        );
    }
}

SplashScreen.propTypes = {
    checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        checkAuth,
    }, dispatch);
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(SplashScreen);
