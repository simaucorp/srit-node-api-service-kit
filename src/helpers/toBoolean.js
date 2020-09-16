export default function toBoolean(value) {
  if (
    value === true ||
    value === "true" ||
    value === 1 ||
    value === "1" ||
    value === "yes" ||
    value === "Y"
  ) {
    return true;
  }

  if (
    value === false ||
    value === "false" ||
    value === 0 ||
    value === "0" ||
    value === "no" ||
    value === "N"
  ) {
    return false;
  }

  return value;
}
