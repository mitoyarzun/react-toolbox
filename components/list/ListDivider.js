import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr-legacy';
import { LIST } from '../identifiers.js';

const ListDivider = ({inset, theme}) => (
  <hr className={inset ? `${theme.divider} ${theme.inset}` : theme.divider} />
);

ListDivider.propTypes = {
  inset: PropTypes.bool,
  theme: PropTypes.shape({
    divider: PropTypes.string,
    inset: PropTypes.string
  })
};

ListDivider.defaultProps = {
  inset: false
};

export default themr(LIST)(ListDivider);
export { ListDivider };
