
const IconServicios = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#ffffff0" d="M0 0h24v24H0z" />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 13.454 9.667 16 17 9"
    />
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={2}
    />
  </svg>
)
export default IconServicios
