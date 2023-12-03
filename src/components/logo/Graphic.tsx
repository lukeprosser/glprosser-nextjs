export default function Graphic({
  classes,
  colour,
}: {
  classes: string;
  colour: string;
}) {
  return (
    <svg viewBox="0 0 205 30" className={classes}>
      <path fill={colour} d="m102.5 0 88.768 36.75H13.732L102.5 0Z" />
      <path fill={colour} d="M53 1h18v23H53z" />
    </svg>
  );
}
