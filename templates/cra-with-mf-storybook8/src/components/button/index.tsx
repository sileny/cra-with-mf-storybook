import React, { MouseEvent } from 'react';
// import PropTypes from 'prop-types';
import './index.scss';

// @ts-expect-error
const Hello = React.lazy(() => import('provider/Hello').then((module) => ({ default: module.Hello })));

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }: Props) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <React.Suspense fallback={<p>Please wait...</p>}>
        {/*@ts-expect-error*/}
        <Hello {...props} />
      </React.Suspense>
    </button>
  );
};

interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean
  /**
   * What background color to use
   */
  backgroundColor: string
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick: (event: MouseEvent<HTMLElement>) => void
  /**
   * from where
   */
  origin: string
}

// 也可以使用`propTypes`属性来写文档定义

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
//   /**
//    * from where
//    */
//   origin: PropTypes.string,
// };

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  origin: '',
};
