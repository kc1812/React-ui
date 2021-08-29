import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import cx from 'classnames';

const Input =  React.forwardRef((props, ref) => {
    const {
        className,
        inputClassName,
        labelClassName,
        type,
        label,
        placeholder,
        readOnly,
        multi,
        maxLength,
        autoFocus,
        value,
        error,
        helperText
      } = props;
    
    const _className = cx(styles.container, className);

    const _inputClassName = cx(
    {
        [styles.input]: !multi,
        [styles.textarea]: multi,
        [styles.readonly]: readOnly,
        [styles.hasError]: error
    },
    inputClassName
    );

    const _labelClassName = cx(styles.label, labelClassName, {
    [styles.error]: error
    });

    const _helperTextClassName = cx(styles.helperText, { [styles.error]: error });

    let _props = {
    type,
    autoFocus,
    placeholder,
    value,
    readOnly,
    maxLength,
    className: _inputClassName,
    // onChange: handleOnChange,
    // onFocus: handleFocus,
    // onBlur: handleOnBlur,
    // onKeyDown: handleKeyDown
    };

    return (
        <div className={_className}>
            {label && <label className={_labelClassName}>{label}</label>}

            {multi ? (
                <textarea {..._props} ref={ref}></textarea>
            ) : (
                <input {..._props} ref={ref} />
            )}

            {helperText && helperText.length && 
                <span className={_helperTextClassName}>{helperText}</span>
            }

        </div>
    );
});

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'date',
        'email',
        'tel',
        'url',
        'search'
    ]).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
    maxLength: PropTypes.number,
    pattern: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    className: PropTypes.string, // Will be applied to container
    inputClassName: PropTypes.string, // Will be applied to underlying input/textarea tag
    labelClassName: PropTypes.string,  // Will be applied to label
    multi: PropTypes.bool, // Renders a textarea if true
    value: PropTypes.string, // Value
    error: PropTypes.bool,
    helperText: PropTypes.string
}

Input.defaultProps = {
    className: '',
    inputClassName: '',
    labelClassName: '',
    type: 'text',
    label: '',
    placeholder: '',
    readOnly: false,
    multi: false
}

export default Input;