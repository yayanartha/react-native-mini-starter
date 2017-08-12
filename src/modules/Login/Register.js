import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { styles as s } from 'react-native-style-tachyons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { register } from '../../actions/action.account';
import { UniText, UniButton, FloatingInput } from '../_global';
import { Toast } from '../../utils';
import { colors } from '../../constants';

class Register extends Component {
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

        this._handleRegister = this._handleRegister.bind(this);
        this._gotoLogin = this._gotoLogin.bind(this);
        this._gotoMain = this._gotoMain.bind(this);

        this.state = {

        };
    }
    _handleRegister() {
        const email = this.emailField.state.text;
        const password = this.passwordField.state.text;
        const password_confirmation = this.repasswordField.state.text;
        const username = this.usernameField.state.text;

        if (email !== '' && password !== '' && password_confirmation !== '' && username !== '') {
            if (password !== password_confirmation) {
                Toast('Harap konfirmasi password dengan benar', 'Data tidak sesuai');
            } else {
                this.props.register(
                    this.props.navigator,
                    email,
                    password,
                    password_confirmation,
                    username
                );
            }
        } else {
            Toast('Harap mengisi semua data', 'Data tidak lengkap');
        }
    }
    _gotoLogin() {
        this.props.navigator.resetTo({
            screen: 'sejasa.Login',
            overrideBackPress: true,
        });
    }
    _gotoMain() {
        this.props.navigator.resetTo({
            screen: 'sejasa.Main',
        });
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
                                ref={username => { this.usernameField = username; }}
                                placeholder="Username"
                            />
                        </View>
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
                        <View style={styles.inputContainer}>
                            <FloatingInput defaultValue=""
                                ref={repassword => { this.repasswordField = repassword; }}
                                placeholder="Konfirmasi Password"
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={{ marginVertical: 16, width: rw(80), borderRadius: 4 }}>
                            <UniButton action={this._handleRegister} borderless={true} borderRadius={4}>
                                <View style={[s.bg_maroon, s.aic, s.jcc, { height: 50, borderRadius: 5 }]}>
                                    <UniText.H2 color="#fff">Mendaftar</UniText.H2>
                                </View>
                            </UniButton>
                        </View>

                        <Text style={[s.ff_roboto_light, s.white, { fontSize: rf(2) }]}>
                            Sudah memiliki akun? <Text style={[s.ff_roboto_bold]} onPress={this._gotoLogin}>
                                Log in di sini
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

Register.propTypes = {
    register: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        register,
    }, dispatch);
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Register);
