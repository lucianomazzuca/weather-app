import '../assets/css/unit_button.css'

const UnitButton = ({ unit, changeUnit }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      {/* <button 
        className="border border-gray-500 rounded-lg text-lg bg-gray-200 mt-4 px-2 inline-block mx-auto"
        onClick={(e) => changeUnit(e)}
      >
        {unit}
      </button> */}

      <span className="text-2xl mr-2 font-semibold" style={{color: unit==='metric' ? '#e8661c' : 'black'}}>C°</span>
      <input type="checkbox" onClick={changeUnit} className="inline-block mt-1" />
      <span className="text-2xl ml-2 font-semibold" style={{color: unit==='imperial' ? 'royalblue' : 'black'}}>F°</span>
    </div>
  );
};

export default UnitButton;
