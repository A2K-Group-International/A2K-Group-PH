const ButtonTechTools = ({ onClick, icon }) => {
  return (
    <button
      className="h-[100px] w-[100px] rounded-3xl border-[0.5px] border-[#E7D7C9] bg-white"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
export default ButtonTechTools;
