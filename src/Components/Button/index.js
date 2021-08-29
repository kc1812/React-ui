import React from 'react';
import styles from "./index.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

const Button = ({onClick, className, label, size, variant, disabled, disabledClassName, children}) => {
    const _className = cx(
        className,
        styles[size],
        styles.button,
        styles[variant],
        {
            [styles.disabled]: disabled,
            [disabledClassName]: disabled
        }
    );

    const renderChildren = (defaultlabel = 'Submit') => {
        if (label) {
            return label;
        } else if (children) {
            return children;
        } else {
            return defaultlabel;
        }
    }

    const handleClick = event => {
        event.preventDefault();
        if (disabled) return;
        onClick && onClick({event});
    }

    return (
        <div className={_className} onClick={handleClick}>
            {renderChildren()}
        </div>
    );
}

Button.prototypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    disabledClassName: ""
}

export default Button;