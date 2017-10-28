import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { ms } from '../../utils';

const BaseTemplate = (props) => {
    return (
        <Text numberOfLines={props.numberOfLines}
            style={{
                fontSize: props.size,
                color: props.color,
                backgroundColor: 'transparent',
                fontFamily: props.family,
                textDecorationLine: props.underline === true ? 'underline' : 'none',
                fontStyle: props.italic === true ? 'italic' : 'normal',
                textAlign: props.textAlign,
                lineHeight: typeof props.lineHeight !== 'undefined'
                    ? props.lineHeight
                    : Math.round(props.size) + 4,
            }}
        >
            {props.children}
        </Text>
    );
};
BaseTemplate.propTypes = {
    children: PropTypes.any.isRequired,
    color: PropTypes.string,
    numberOfLines: PropTypes.number,
    size: PropTypes.number,
    family: PropTypes.string,
    lineHeight: PropTypes.number,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    textAlign: PropTypes.string,
};
BaseTemplate.defaultProps = {
    color: '#000',
    numberOfLines: 0,
    size: ms(14),
    family: 'LibreFranklin-Regular',
    textAlign: 'left',
};

export const Bold = (props) => {
    return (
        <BaseTemplate {...props}
            family="Roboto-Bold"
        />
    );
};

export const Regular = (props) => {
    return (
        <BaseTemplate {...props}
            family="Roboto-Regular"
        />
    );
};

export const Light = (props) => {
    return (
        <BaseTemplate {...props}
            family="Roboto-Light"
        />
    );
};
