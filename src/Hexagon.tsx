type Props = {
  size: number;
  isEven: boolean;
};

const Hexagon = ({ size, isEven }: Props) => {
  return (
    <svg
      onClick={() => console.log("click")}
      width={size}
      height={size}
      style={{
        marginLeft: -size / 16,
        marginRight: -size / 16,
        marginTop: isEven ? -size / 4 : 0,
        marginBottom: isEven ? -size / 4 : 0,
      }}
      className="clip-hexagon"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0L15 4V12L8 16L1 12V4L8 0Z"
        className="fill-blue-500 hover:fill-red-500 stroke-white"
      />
    </svg>
  );
};

export default Hexagon;
