import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { styles as s } from 'react-native-style-tachyons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginEmail } from '../../actions/action.account';
import { UniText, UniButton, FloatingInput } from '../_global';
import { colors } from '../../constants';

class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent((event) => {
            if (event.id === 'backPress') {
                this.props.navigator.resetTo({
                    screen: 'sejasa.Main',
                });
            }
        });

        this._handleLogin = this._handleLogin.bind(this);
        this._gotoRegister = this._gotoRegister.bind(this);
        this._gotoMain = this._gotoMain.bind(this);
        this._gotoForgotPassword = this._gotoForgotPassword.bind(this);

        this.state = {

        };
    }
    _gotoRegister() {
        this.props.navigator.resetTo({
            screen: 'sejasa.Register',
            overrideBackPress: true,
        });
    }
    _gotoMain() {
        this.props.navigator.resetTo({
            screen: 'sejasa.Main',
        });
    }
    _gotoForgotPassword() {
        this.props.navigator.push({
            screen: 'sejasa.ForgotPassword',
        });
    }
    _handleLogin() {
        const email = this.emailField.state.text;
        const password = this.passwordField.state.text;

        if (email !== '' && password !== '') {
            this.props.loginEmail(this.props.navigator, email, password);
        } else {
            Toast('Harap mengisi semua data', 'Data tidak lengkap');
        }
    }
    render() {
        return (
            <View style={[s.flx_i]}>
                {
                    // Use this to make a full screen background image
                    // <Image source={require('../../img/cover-login.png')}
                    //     style={[s.absolute, s.rm_cover, { width: rw(100), height: rh(100) }]}
                    // />
                }

                <ScrollView hideVerticalScrollViewIndicator={true}>
                    <View style={[s.aic, { paddingVertical: 20 }]}>
                        {/* Logo here */}
                    </View>

                    <View style={[s.aic]}>
                        <View style={styles.inputContainer}>
                            <FloatingInput defaultValue=""
                                ref={email => { this.emailField = email; }}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FloatingInput defaultValue=""
                                ref={password => { this.passwordField = password; }}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={[s.aife, { width: rw(80), paddingBottom: 16 }]}>
                            <Text style={[s.white, s.ff_roboto_bold, { fontSize: rf(2) }]} onPress={this._gotoForgotPassword}>
                                Lupa password?
                            </Text>
                        </View>

                        <View style={{ marginVertical: 16, width: rw(80), borderRadius: 4 }}>
                            <UniButton action={this._handleLogin} borderless={true} borderRadius={4}>
                                <View style={[s.bg_maroon, s.aic, s.jcc, { height: 50, borderRadius: 5 }]}>
                                    <UniText.H2 color="#fff">Masuk</UniText.H2>
                                </View>
                            </UniButton>
                        </View>

                        <Text style={[s.ff_roboto_light, s.white, { fontSize: rf(2) }]}>
                            Belum memiliki akun? <Text style={[s.ff_roboto_bold]} onPress={this._gotoRegister}>
                                Daftar di sini
                            </Text>
                        </Text>

                        <View style={{ paddingVertical: 20 }}>
                            <Text style={[s.white, s.ff_roboto_bold, { fontSize: rf(2) }]} onPress={this._gotoMain}>
                                Kembali ke halaman utama
                            </Text>
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fff',
        marginBottom: 8,
        borderRadius: 4,
        width: rw(80),
    },
});

Login.propTypes = {
    loginEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginEmail,
    }, dispatch);
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
