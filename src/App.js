import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import SearchForm from './components/SearchForm';

function App() {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState('');

  const api = '405dd38c238a71236d50fdea512d38a6'

  const getWeatherByCity = async (city) => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
      const data = await res.json();
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getWeatherByCity(search);
    setWeather(result);
  }

  return (
    <div className="App min-h-full wrapper container mx-auto px-4 flex flex-col items-center">
      <div 
        className="flex flex-col p-5 mt-24 mb-10
        transform   transition-transform duration-300"
      >
        <h1 className="text-5xl mb-8">Weather App</h1>
        <SearchForm handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} inputValue={search} />
      </div>

      {weather && <Card data={weather} />}
    </div>
  );
}

export default App;

// translate-y-36 hover:-translate-y-52