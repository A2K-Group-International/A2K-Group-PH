const Button = ({ name, link }) => {
  return (
    <button className="rounded-full bg-darkGray px-4 py-2 text-sm font-[10px] text-white">
      <a href={link}>{name}</a>
    </button>
  );
};
export default Button;
