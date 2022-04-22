import React, {useEffect} from 'react';
import axios from 'axios';
import ReactApexChart from '../WheaterChart/index'
import WheatherCard from '../../Components/WheatherCard/index';
import Form from "../SearchBar/index";
import HelpersGeneral  from '../../Helpers/GeneralHelpers';
import CustomIcons from '../../Helpers/CustomIcons';
import ErrorPage from "../ErrorPage/index";
import './index.css';

const MainPage = (props) => {
    const [cityTemp, setCityTemp] = React.useState('');
    const [cityName, setCityName] = React.useState('');
    const [error, setError] = React.useState(false);

    useEffect(() => {
       if(cityName !== ''){
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=66ac06ac93b44233a62d426c2280554a`).then(response => {
          setCityTemp(response.data);
          console.log("response", response)   
        });
       } 
      }, [cityName]);

  const handleSubmit = event => {
    console.log("values", event);
    event.preventDefault();
   
   setTimeout(() => {
    
   }, 3000)
 }

const handleChange = () => {
}

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city !== null && city !== undefined) {
      setCityName(city);
    } else {
      setError(true);
    }
  };
    
return(
 <>  
  <div className="div-main">
   <div>
     <div className="div-main-1">
          <span className="span-main-1">Wheather Forecaster</span>
          </div>
     </div>

   <div> 
     <Form loadweather={getWeather} error={error} />
        {cityTemp !== '' ?  (
           <>     
            <div className="div-main-2">
              <div>
                    <ReactApexChart
                      props={cityTemp} />
              </div>            
                  <div style={{marginLeft: 70}}>
                      <WheatherCard
                        cityName={cityTemp?.city_name}
                        icon={<CustomIcons
                          outOfMenu={true}
                          icon={cityTemp?.data[0]?.weather.icon}
                          alt={cityTemp?.data[0]?.weather.icon} />}
                          temp={Math.round(cityTemp?.data[0]?.temp) + "C°"}
                          tempDesc={cityTemp?.data[0]?.weather.description}
                          date={HelpersGeneral.getChartDate(cityTemp?.data[0].datetime)} />
                    </div>
                   </div>
                 </>
              ) : (
              <ErrorPage/>
                  )}
           </div>
    </div>
  </>
  )
}

export default MainPage;
