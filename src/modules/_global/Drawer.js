import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize as rf } from 'react-native-responsive-dimensions';
import { colors } from '../../constants';

const DrawerMenu = (props) => {
    return (
        <TouchableOpacity onPress={props.action} activeOpacity={0.8}>
            <View style={[s.flx_row, s.jcc, { paddingHorizontal: 16, height: 45 }]}>
                <View style={[s.aic, s.jcc, { width: 45 }]}>
                    <IonIcon name={props.iconName} size={24} color={colors.TEAL}/>
                </View>
                <View style={[s.flx_i, s.jcc, { paddingHorizontal: 16 }]}>
                    <Text style={[s.ff_roboto, s.black]}>
                        {props.label}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
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
        this.props.navigator.push({
            screen: 'callind.Profile',
            overrideBackPress: true,
        });
    }
    _gotoInvite() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.InviteFriends',
            overrideBackPress: true,
        });
    }
    _gotoBroadcast() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.Broadcast',
            overrideBackPress: true,
        });
    }
    _gotoPrivateChat() {
        this._toggleDrawer();
    }
    _gotoCurhatChat() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.CurhatChat',
            overrideBackPress: true,
        });
    }
    _gotoFindUser() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.FindUser',
            overrideBackPress: true,
        });
    }
    _gotoWallet() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.Wallet',
            overrideBackPress: true,
        });
    }
    _gotoAdvertise() {
        this._toggleDrawer();
        // Pindah ke tab iklan
    }
    _gotoTransaction() {
        this._toggleDrawer();
        this.props.navigator.push({
            screen: 'callind.Transaction',
            overrideBackPress: true,
        });
    }
    render() {
        return (
            <View style={[s.flx_i, s.bg_white]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[s.bg_red, s.flx_row, s.aic, { height: 150 }]}>
                        <View style={{ paddingLeft: 16 }}>
                            <View style={[s.aic, s.jcc, s.bg_grey_soft, {
                                width: 80, height: 80, borderRadius: 80,
                            }]}>
                            </View>
                        </View>
                        <View style={[s.flx_i, { paddingHorizontal: 16 }]}>
                            <TouchableOpacity onPress={this._gotoProfile} activeOpacity={0.8}>
                                <View>
                                    <Text style={[s.white, s.ff_roboto, { fontSize: rf(2.3), marginBottom: 8 }]}>
                                        Nama user
                                    </Text>
                                    <Text style={[s.white, s.ff_roboto]}>
                                        email@user.com
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 8 }}/>

                    <DrawerMenu label="Invites" iconName="ios-person-add-outline"
                        action={this._gotoInvite}
                    />

                    <DrawerMenu label="Broadcast Chat" iconName="ios-radio-outline"
                        action={this._gotoBroadcast}
                    />

                    <DrawerMenu label="Private Chat" iconName="ios-lock-outline"
                        action={this._gotoPrivateChat}
                    />

                    <DrawerMenu label="Curhat Chat" iconName="ios-chatbubbles-outline"
                        action={this._gotoCurhatChat}
                    />

                    <DrawerMenu label="Find User" iconName="ios-globe-outline"
                        action={this._gotoFindUser}
                    />

                    <DrawerMenu label="Wallet" iconName="ios-cash-outline"
                        action={this._gotoWallet}
                    />

                    <DrawerMenu label="Advertise" iconName="ios-megaphone-outline"
                        action={this._gotoAdvertise}
                    />

                    <DrawerMenu label="Transaction" iconName="ios-swap-outline"
                        action={this._gotoTransaction}
                    />

                    <View style={[s.jcc, { height: 40, marginTop: 12, paddingHorizontal: 16 }]}>
                        <Text style={[s.grey9, s.ff_roboto, { fontSize: rf(1.7) }]}>
                            Callind App v-0.1
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default Drawer;
