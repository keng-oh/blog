import Typography from "typography"
import tofu from 'typography-theme-japanese-tofu'

const typography = new Typography(tofu)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
