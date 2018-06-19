import { themr } from 'react-css-themr-legacy';
import { LINK } from '../identifiers.js';
import { Link } from './Link.js';
import theme from './theme.scss';

const ThemedLink = themr(LINK, theme)(Link);

export default ThemedLink;
export { ThemedLink as Link };
