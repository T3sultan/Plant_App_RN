import { colors, fonts, spacing } from "../../theme";

const BASE = {
  fontFamily: fonts.primary,
  fontSize: spacing[4],
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: fonts.primaryBold,
  fontSize: spacing[4],
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
    fontSize: spacing[9],
  },
  h2: {
    ...BOLD,
    fontSize: spacing[8],
  },
  h3: {
    ...BASE_BOLD,
    fontSize: spacing[7],
  },
  h4: {
    ...BASE_BOLD,
    fontSize: spacing[6],
  },
  h5: {
    ...BASE_BOLD,
    fontSize: spacing[5],
  },
  small: {
    ...BOLD,
    fontSize: spacing[3],
  },
};
