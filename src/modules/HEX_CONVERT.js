export const getColor = (
  hex,
  alpha = 1,
  brightness = 0.75,
  saturation = 0.9
) => {
  // IF UNDEFINED RETURN WHITE
  if (!hex) return `hsla(0, 0%, ${brightness * 100}%, ${alpha})`

  // HEX TO DECIMAL
  let rgb = parseInt(hex.substring(1), 16)

  // CONVERT TO RGB
  let r = ((rgb >> 16) & 0xff) / 255
  let g = ((rgb >> 8) & 0xff) / 255
  let b = ((rgb >> 0) & 0xff) / 255

  // EXTRACT HUE
  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b)
  let h = (max + min) / 2

  if (max == min) {
    // ACHROMATIC
    h = 0
  } else {
    let d = max - min
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return `hsla(${Math.round(360 * h)}, ${saturation * 100}%, ${
    brightness * 100
  }%, ${alpha})`
}
