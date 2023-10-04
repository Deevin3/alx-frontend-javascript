export default function cleanset(set, startstring) {
  return array.from(set).filter(val => val.startsWith(startstring)).join('-')
}
