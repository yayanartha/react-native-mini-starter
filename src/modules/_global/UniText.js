import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import { responsiveFontSize as rf } from 'react-native-responsive-dimensions';

const BaseTemplate = (props) => {
    return (
        <Text numberOfLines={props.numberOfLines}
            style={{
                fontSize: props.size, color: props.color,
                backgroundColor: 'transparent',
                fontFamily: props.family,
            }}
        >
            {props.children}
        </Text>
    );
};
BaseTemplate.propTypes = {
    color: PropTypes.string.isRequired,
    numberOfLines: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    family: PropTypes.string.isRequired,
};
BaseTemplate.defaultProps = {
    color: '#000',
    numberOfLines: 0,
    size: rf(2),
    family: 'Roboto-Regular',
};

export const H1 = (props) => {
    return (
        <BaseTemplate size={rf(2.5)} {...props}
            family={!!props.noBold ? 'Roboto-Regular' : 'Roboto-Bold'}
        />
    );
};

export const H2 = (props) => {
    return (
        <BaseTemplate size={rf(2)} {...props}
            family="Roboto-Bold"
        />
    );
};

export const H3 = (props) => {
    return (
        <BaseTemplate size={rf(2)} {...props} />
    );
};

export const H4 = (props) => {
    return (
        <BaseTemplate size={rf(1.7)} {...props}
            family="Helvetica"
        />
    );
};

export const FatM = (props) => {
    return (
        <BaseTemplate size={rf(1.7)} {...props}
            family="Roboto-Bold"
        />
    );
}

export const FatS = (props) => {
    return (
        <BaseTemplate size={rf(1.5)} {...props}
            family="Roboto-Bold"
        />
    );
}
