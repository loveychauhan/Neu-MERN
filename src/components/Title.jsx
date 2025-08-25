export default function Title({ highlitedText, normalText, details }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl sm:text-4xl my-4">
        <span className="text-mullRed">{highlitedText}</span>{" "}
        <span>{normalText}—</span>
      </h3>
      <p className="text-2xl">{details}</p>
    </div>
  );
}
