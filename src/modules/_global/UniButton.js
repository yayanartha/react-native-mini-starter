import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native';

const UniButton = (props) => {
    // ANDROID
    if (Platform.OS === 'android') {

        // Below Lolipop
        if (Platform.Version < 21) {
            return (
                <TouchableHighlight
                    onPress={() => props.action(props.params)}
                    underlayColor={props.highlightColor}
                    disabled={props.disabled}
                    style={{ borderRadius: props.borderRadius }}
                >
                    {props.children}
                </TouchableHighlight>
            );
        }

        // Lolipop or above (with ripple effect)
        return (
            <TouchableNativeFeedback
                onPress={() => props.action(props.params)}
                background={TouchableNativeFeedback.Ripple(props.highlightColor, props.borderless)}
                useForeground={props.foregroundRipple && TouchableNativeFeedback.canUseNativeForeground()}
                disabled={props.disabled}
            >
                {props.children}
            </TouchableNativeFeedback>
        );
    }

    // IOS
    return (
        <TouchableOpacity
            onPress={() => props.action(props.params)}
            activeOpacity={0.8}
            disabled={props.disabled}
            style={{ borderRadius: props.borderRadius }}
        >
            {props.children}
        </TouchableOpacity>
    );
}

UniButton.propTypes = {
    children: PropTypes.any.isRequired,
    action: PropTypes.func.isRequired,
    params: PropTypes.any,
    disabled: PropTypes.bool,
    highlightColor: PropTypes.string,
    borderless: PropTypes.bool,
    borderRadius: PropTypes.number,
    foregroundRipple: PropTypes.bool,
};
UniButton.defaultProps = {
    params: null,
    highlightColor: Platform.Version < 21 ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.15)',
    disabled: false,
    borderless: false,
    foregroundRipple: false,
};

export default UniButton;
