import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactApexChart from '../WheaterChart/index'
import WheatherCard from '../../Components/WheatherCard/index';
import Form from "../SearchBar/index";
import HelpersGeneral  from '../../Helpers/GeneralHelpers';
import CustomIcons from '../../Helpers/CustomIcons';
import ErrorPage from "../ErrorPage/index";
import './index.css';
import EmptyPage from '../EmptyPage';

const MainPage = (props) => {
    const [tempData, setTempData] = useState('');
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
       if(cityName !== ''){
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=66ac06ac93b44233a62d426c2280554a`).then(response => {
          setTempData(response);
        });
       } 
      }, [cityName]);

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
        {tempData.data !== '' && tempData !== '' ? (
           <>     
            <div className="div-main-2">
              <div>
                    <ReactApexChart
                     props={tempData?.data} />
              </div>            
                  <div style={{marginLeft: 70}}>
                      <WheatherCard
                        cityName={tempData?.data?.city_name}
                        icon={<CustomIcons
                          outOfMenu={true}
                          icon={tempData?.data?.data[0]?.weather.icon}
                          alt={tempData?.data?.data[0]?.weather.icon} />}
                          temp={Math.round(tempData?.data?.data[0]?.temp) + "C°"}
                          tempDesc={tempData?.data?.data[0]?.weather.description}
                          date={HelpersGeneral.getChartDate(tempData?.data?.data[0].datetime)} 
                          />
                    </div>
                   </div>
                 </>
              ) : (
              tempData.data === "" ? (
                <ErrorPage/>
              ) : (
                <EmptyPage/>
              )
                )}
       </div>
    </div>
  </>
  )
}

export default MainPage;
