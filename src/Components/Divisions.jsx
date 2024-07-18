const Divisions = ({ image, text }) => {
  return (
    <div className="w-52 text-center">
      <img
        className="mx-auto object-contain"
        src={image}
        alt="Division Image"
      />
      <p className="mt-2 text-[12px] md:text-justify">{text}</p>
    </div>
  );
};
export default Divisions;
