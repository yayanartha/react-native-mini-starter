import React, { PureComponent } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize as rf } from 'react-native-responsive-dimensions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions/action.account';
import { Navbar, UniText, UniButton, BottomButtonBar } from './index';
import { colors } from '../../constants';

const DrawerMenu = (props) => {
    return (
        <UniButton action={props.action}>
            <View style={[s.flx_row, s.jcc, { paddingHorizontal: 12, height: 45 }]}>
                <View style={[s.aic, s.jcc, { width: 30 }]}>
                    <IonIcon name={props.iconName} size={24} color={colors.RED} />
                </View>
                <View style={[s.flx_i, s.jcc, { paddingHorizontal: 12 }]}>
                    <UniText.H3>{props.label}</UniText.H3>
                </View>
            </View>
        </UniButton>
    );
};

class Drawer extends PureComponent {
    constructor(props) {
        super(props);
        this._toggleDrawer = this._toggleDrawer.bind(this);
        this._gotoProfile = this._gotoProfile.bind(this);
        this._gotoInvite = this._gotoInvite.bind(this);
        this._gotoBroadcast = this._gotoBroadcast.bind(this);
        this._gotoPrivateChat = this._gotoPrivateChat.bind(this);
        this._gotoCurhatChat = this._gotoCurhatChat.bind(this);
        this._gotoFindUser = this._gotoFindUser.bind(this);
        this._gotoWallet = this._gotoWallet.bind(this);
        this._gotoAdvertise = this._gotoAdvertise.bind(this);
        this._gotoTransaction = this._gotoTransaction.bind(this);

        this._gotoBusinessProfile = this._gotoBusinessProfile.bind(this);
        this._handleLogout = this._handleLogout.bind(this);

        this.state = {

        };
    }
    _toggleDrawer() {
        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
        });
    }
    _gotoProfile() {
        this._toggleDrawer();

    }
    _gotoInvite() {
        this._toggleDrawer();

    }
    _gotoBroadcast() {
        this._toggleDrawer();

    }
    _gotoPrivateChat() {
        this._toggleDrawer();
    }
    _gotoCurhatChat() {
        this._toggleDrawer();

    }
    _gotoFindUser() {
        this._toggleDrawer();

    }
    _gotoWallet() {
        this._toggleDrawer();

    }
    _gotoAdvertise() {
        this._toggleDrawer();
        // Pindah ke tab iklan
    }
    _gotoTransaction() {
        this._toggleDrawer();

    }
    _gotoDashboard() {
        this._toggleDrawer();
        this.props.navigator.resetTo({
            screen: 'sejasa.Dashboard',
            animated: false,
        });
    }
    _gotoBusinessProfile() {
        this._toggleDrawer();
        this.props.navigator.resetTo({
            screen: 'sejasa.BusinessProfile',
            animated: false,
        });
    }
    _handleLogout() {
        this._toggleDrawer();
        this.props.logout(this.props.navigator);
    }
    render() {
        return (
            <View style={[s.flx_i, s.bg_white]}>

                <View style={[s.bg_teal, s.jcc, { height: 160, padding: 16 }]}>
                    <View style={[s.aic, s.jcc, s.bg_grey_soft, {
                        width: 65, height: 65, borderRadius: 65,
                    }]}>

                    </View>
                    <View style={{ paddingTop: 12 }}>
                        <UniText.H3 color="#fff">Nama User</UniText.H3>
                        <UniText.H3 color="#fff">email@user.com</UniText.H3>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: 8 }}/>

                    <DrawerMenu label="Points Summary"
                        iconName="ios-square-outline"
                        action={this._gotoInvite}
                    />

                    <DrawerMenu label="Beli Point"
                        iconName="ios-square-outline"
                        action={this._gotoBroadcast}
                    />

                    <DrawerMenu label="Pro Dashboard"
                        iconName="ios-square-outline"
                        action={this._gotoPrivateChat}
                    />

                    <View style={{ paddingTop: 16, paddingHorizontal: 16, paddingBottom: 8 }}>
                        <UniText.FatM color="#999">
                            Profil Usaha Saya
                        </UniText.FatM>
                    </View>
                    <DrawerMenu label="Contoh Profil Usaha"
                        iconName="ios-square-outline"
                        action={this._gotoBusinessProfile}
                    />
                    <DrawerMenu label="Buat profil usaha baru"
                        iconName="ios-square-outline"
                        action={this._gotoCurhatChat}
                    />
                    <View style={{ height: 1, backgroundColor: '#eee' }}/>

                    <DrawerMenu label="Pengaturan"
                        iconName="ios-square-outline"
                        action={this._gotoFindUser}
                    />

                    <DrawerMenu label="Hubungi Kami (Live Chat)"
                        iconName="ios-square-outline"
                        action={this._gotoWallet}
                    />

                    <DrawerMenu label="Bantuan"
                        iconName="ios-square-outline"
                        action={this._gotoAdvertise}
                    />

                    <DrawerMenu label="Tutorial Sejasa Pay"
                        iconName="ios-square-outline"
                        action={this._gotoTransaction}
                    />

                    <DrawerMenu label="Tutorial Progress Payment"
                        iconName="ios-square-outline"
                        action={this._gotoTransaction}
                    />

                    <DrawerMenu label="Keluar"
                        iconName="md-close"
                        action={this._handleLogout}
                    />

                    <View style={{ height: 8 }}/>
                </ScrollView>
            </View>
        );
    }
}

Drawer.propTypes = {
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout,
    }, dispatch);
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Drawer);
