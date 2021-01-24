import './App.css';
import img from './sunny_s_cloudy.png'

function App() {
  return (
    <div className="App min-h-full">
      <div className="wrapper container mx-auto px-4 min-h-screen flex flex-col items-center">


        <div 
          className="flex flex-col p-5 mt-24 mb-10
          transform   transition-transform duration-300"
        >
          <h1 className="text-5xl mb-8">Weather App</h1>
          <form action="">
            <input type="text" placeholder="Enter a city" className="p-2 rounded-md w-full shadow-md outline-none"/>
          </form>
        </div>

        <div className="card grid grid-cols-3 gap-3 bg-white p-6 rounded-3xl shadow-xl w-96">

          <div className="text-center col-span-2 flex flex-col justify-between">
            <h4 className="text-5xl text-center">30°</h4>
            <h3 className="text-xl col-span-2 text-center">Buenos Aires</h3>
          </div>

          <div className="text-center mx-auto flex flex-col justify-between">
            <img src={img} alt="" srcset=""/>
            <h4 className="text-md">Clear Sky</h4>
          </div>

          <div className="group ">
            <h4>Feels like</h4>
            <p>30°</p>
          </div>

          <div className="group ">
            <h4>Max Temp</h4>
            <p>34°</p>
          </div>

          <div className="group">
            <h4>Min Temp</h4>
            <p>24°</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

// translate-y-36 hover:-translate-y-52