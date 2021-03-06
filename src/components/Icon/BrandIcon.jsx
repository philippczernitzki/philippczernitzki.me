import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Icon = props => (
  <FontAwesomeIcon
    icon={['fab', props.src]}
    className={classNames(props.className, 'Icon')}
  />
)
Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
}
Icon.defaultProps = {
  className: '',
}
export default Icon
