const UnitButton = ({ unit, changeUnit }) => {
  return (
    <>
      <button 
        className="border border-gray-500 rounded-lg text-lg bg-gray-200 mt-4 px-2 inline-block mx-auto"
        onClick={(e) => changeUnit(e)}
      >
        {unit}
      </button>
    </>
  );
};

export default UnitButton;
