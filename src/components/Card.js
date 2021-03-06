import img from '../sunny_s_cloudy.png'

const Card = ({ data }) => {
  const imgLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (
    <div className="card">
      <div className="text-center col-span-2 flex flex-col justify-between">
        <h4 className="text-5xl text-center">{ data.main.temp }°</h4>
        <h3 className="text-xl col-span-2 text-center">{ data.name }, { data.sys.country }</h3>
      </div>

      <div className="text-center mx-auto flex flex-col justify-between">
        <img src={imgLink} alt="" className="w-16"/>
        <h4 className="text-md">{ data.weather[0].main }</h4>
      </div>

      <div className="group">
        <h4>Feels like</h4>
        <p>{ data.main.feels_like }°</p>
      </div>

      <div className="group">
        <h4>Max Temp</h4>
        <p>{ data.main.temp_max }°</p>
      </div>

      <div className="group">
        <h4>Min Temp</h4>
        <p>{ data.main.temp_min }°</p>
      </div> 
    </div>
  );
};

export default Card;
