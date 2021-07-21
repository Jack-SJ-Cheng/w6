export default function timeTransformer(timeHTML) {
  const localDate = new Date(timeHTML * 1000);
  return localDate.toLocaleDateString();
}
