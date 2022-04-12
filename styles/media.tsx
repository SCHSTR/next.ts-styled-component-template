//media.js
import { css } from "styled-components"

const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
}
export default Object.keys(sizes).reduce((acc:any, label:any) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})