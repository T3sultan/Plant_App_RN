import { colors, fonts, spacing } from "../../theme";

const BASE = {
  fontFamily: fonts.primary,
  fontSize: spacing[5],
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: fonts.primaryBold,
  fontSize: spacing[5],
  color: colors.white,
};
const BOLD = {
  fontFamily: fonts.bold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BASE,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 18,
  },
  h5: {
    ...BASE_BOLD,
    fontSize: 16,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
