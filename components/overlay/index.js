import { themr } from 'react-css-themr-legacy';
import { OVERLAY } from '../identifiers.js';
import { Overlay } from './Overlay.js';
import theme from './theme.scss';

const ThemedOverlay = themr(OVERLAY, theme)(Overlay);
export default ThemedOverlay;
export { ThemedOverlay as Overlay };
