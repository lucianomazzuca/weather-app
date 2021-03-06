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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = '405dd38c238a71236d50fdea512d38a6'

  const getWeatherByCity = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api}`);

      // Check if the city was found
      if(res.status === 404){
        return setError("Couldn't find that city");
      }

      setError(null);
      const data = await res.json();
      return data
    } catch (err) {
      console.error(err)
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

    if(search === '') {
      return setError('You have to enter a city')
    }
    
    setLoading(true)
    setWeather(null)
    await updateWeather(search)
    setLoading(false)
  }

  const handleUnitButton = (e) => {
    // Switch unit system
    if(unit === 'metric'){
      setUnit('imperial')
    } else {
      setUnit('metric')
    }
  }

  useEffect(() => {
    if(weather !== null){
      setLoading(true)
      setWeather(null)
      updateWeather(search)
        .then(res => setLoading(false))
    }
  }, [unit])

  return (
    <div className="App wrapper">
      <div className="flex flex-col mt-8 md:mt-24 mb-10 justify-center w-full">
        <h1 className="title">Weather App</h1>
        
        <SearchForm handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} inputValue={search} />

        <UnitButton unit={unit} changeUnit={handleUnitButton} />
      </div>

      {error && <div>{error}</div>}

      {loading && <ClipLoader color={'#FF6B00'} />}

      {weather && error==null && <Card data={weather} />}
    </div>
  );
}

export default App;

// translate-y-36 hover:-translate-y-52