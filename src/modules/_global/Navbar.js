import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import { responsiveHeight as rh, responsiveWidth as rw,
    responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { UniButton } from '../_global';
import { colors } from '../../constants';

const NAVBAR_HEIGHT = 56;

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this._leftAction = this._leftAction.bind(this);
        this._rightAction = this._rightAction.bind(this);
        this.state = {

        };
    }
    _leftAction() {
        this.props.leftAction(this.props.leftParams);
    }
    _rightAction() {
        this.props.rightAction(this.props.rightParams);
    }
    render() {
        return (
            <View style={[s.jcc, { height: NAVBAR_HEIGHT, backgroundColor: this.props.bgColor,
                borderBottomWidth: this.props.noBorder ? 0 : 1, borderBottomColor: '#ddd',
            }]}>
                {
                    !!this.props.centerComponent &&
                    <View style={[s.absolute, s.aic, s.jcc, { width: rw(100), height: NAVBAR_HEIGHT }]}>
                        {this.props.centerComponent}
                    </View>
                }

                {
                    !!this.props.leftComponent &&
                    <View style={[s.absolute, s.left_0, { width: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT }]}>
                        <UniButton action={this._leftAction}>
                            <View style={[s.jcc, s.aic, { height: NAVBAR_HEIGHT, width: NAVBAR_HEIGHT }]}>
                                {this.props.leftComponent}
                            </View>
                        </UniButton>
                    </View>
                }

                {
                    !!this.props.rightComponent &&
                    <View style={[s.absolute, s.right_0]}>
                        {
                            !!this.props.rightAction ?
                            <TouchableOpacity activeOpacity={0.8}
                                onPress={this._rightAction.bind(this)}
                            >
                                <View style={[s.jcc, s.aife, { height: rh(8), paddingHorizontal: 16 }]}>
                                    {this.props.rightComponent}
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={[s.jcc, { height: rh(8.5), paddingHorizontal: 16 }]}>
                                {this.props.rightComponent}
                            </View>
                        }
                    </View>
                }
            </View>
        );
    }
}

Navbar.propTypes = {
    bgColor: PropTypes.string.isRequired,
    centerComponent: PropTypes.any,
    leftComponent: PropTypes.any,
    leftAction: PropTypes.func,
    rightComponent: PropTypes.any,
    rightAction: PropTypes.func,
    noBorder: PropTypes.bool,
};

Navbar.defaultProps = {
    bgColor: '#fff',
    noBorder: false,
};

export default Navbar;
