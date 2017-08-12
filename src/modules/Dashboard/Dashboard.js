import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, Image, Animated,
    InteractionManager, Platform,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { IconsMap, IconsLoaded } from '../../utils/IconMap';
import { TabViewAnimated, TabBar, TabViewPagerPan, TabViewPagerScroll } from 'react-native-tab-view';
import { styles as s } from 'react-native-style-tachyons';
import { Navbar, UniText, UniButton, BottomButtonBar } from '../_global';
import { colors } from '../../constants';

class Dashboard extends Component {
    static navigatorStyle = {
        navBarTransparent: true,
        drawUnderNavBar: false,
    };
    constructor(props) {
        super(props);
        IconsLoaded.then(() => {
            this.props.navigator.setButtons({
                leftButtons: [
                    { id: 'sideMenu', icon: IconsMap['menu'] },
                ],
                animated: true,
            });
        });

        this.state = {

        };
    }
    render() {
        return (
            <View style={[s.flx_i, s.bg_white]}>
                <Navbar noBorder={true} bgColor={colors.TEAL}
                    centerComponent={<UniText.H1 color="#fff" noBold>Pro Dashboard</UniText.H1>}
                />


            </View>
        );
    }
}

export default Dashboard;
