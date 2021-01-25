import { useState, useEffect } from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import Card from './components/Card';
import SearchForm from './components/SearchForm';
import UnitButton from './components/UnitButton';

function App() {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState('');
  const [unit, setUnit] = useState('metric');
  const [loading, setLoading] = useState(true);

  const api = '405dd38c238a71236d50fdea512d38a6'

  const getWeatherByCity = async (city) => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api}`);
      const data = await res.json();
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const updateWeather = async (city) => {
    const result = await getWeatherByCity(city);
    setWeather(await result);
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateWeather(search)
  }

  const handleUnitButton = (e) => {
    // Switch unit system
    if(unit === 'metric'){
      setUnit('imperial')
    } else {
      setUnit('metric')
    }

    // If a card is displaying, fetch again
    // if(weather !== null) {
    //   updateWeather(search)
    // }
  }

  useEffect(() => {
    if(weather !== null){
      console.log('updating units')
      updateWeather(search)
    }
  }, [unit])

  return (
    <div className="App min-h-full wrapper container mx-auto px-4 flex flex-col items-center">
      <div 
        className="flex flex-col p-5 mt-24 mb-10
        transform   transition-transform duration-300"
      >
        <h1 className="text-5xl mb-8">Weather App</h1>
        <SearchForm handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} inputValue={search} />
        <UnitButton unit={unit} changeUnit={handleUnitButton} />
      </div>


      {weather && <Card data={weather} />}
    </div>
  );
}

export default App;

// translate-y-36 hover:-translate-y-52