export default function ColorCircle({ colorHex, handleSelectColor }) {
  return (
    <div
      className="color-circle"
      onClick={() => handleSelectColor(colorHex)}
      style={{
        backgroundColor: colorHex,
      }}
    />
  );
}
