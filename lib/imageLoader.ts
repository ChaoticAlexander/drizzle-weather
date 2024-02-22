type imageSize = 1 | 2 | 4
export default function loadImage(name: string, size: imageSize) {
  return `https://openweathermap.org/img/wn/${name}@${size}x.png`
}