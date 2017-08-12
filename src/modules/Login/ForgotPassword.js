import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import Config from 'react-native-config';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { styles as s } from 'react-native-style-tachyons';
import { Navbar, UniText, UniButton, BottomButtonBar } from '../_global';
import * as LoadingIndicator from '../../actions/LoadingIndicator';
import { colors } from '../../constants';

class Dashboard extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this._handleBack = this._handleBack.bind(this);

        this.state = {

        };
    }
    componentDidMount() {
        LoadingIndicator.show(this.props.navigator);
    }
    _handleBack() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={[s.flx_i, s.bg_white]}>
                <Navbar
                    leftComponent={<IonIcon name="md-arrow-back" size={24} color="#000"/>}
                    leftAction={this._handleBack}
                    centerComponent={<UniText.H1 noBold>Forgot Password</UniText.H1>}
                />

                <WebView
                    source={{ uri: Config.FORGOT_PASSWORD_URL }}
                    onLoadEnd={() => LoadingIndicator.dismiss(this.props.navigator)}
                />

            </View>
        );
    }
}

export default Dashboard;
