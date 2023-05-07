function Editor(props) {
  return (
    <svg
      width="60px"
      height="80px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
        fill="#000"
        fill-opacity=".16"
        stroke={props.color ? "#000" : 'white'}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="m5 16 4-4-4-4"
        stroke={props.color ? "#000" : 'white'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 16h8"
        stroke={props.color ? "#000" : 'white'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default Editor;