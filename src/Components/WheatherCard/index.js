import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const WheatherCard = (props) => {
    const { date, tempDesc, temp, cityName, icon } = props;

return(
<>
 <div className="Card">

<div style={{marginTop: 50}}>
  <div>
       <h1>{temp}</h1> 
    </div>
    <div>
        {cityName}
    </div>
    <div>
        {date}
    </div>
    <div>
        {icon}
    </div>
    <div>
        {tempDesc}
     </div>
    </div>        
    </div>
  </>
 )
};

WheatherCard.propTypes = {
    number: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    width: PropTypes.oneOf(['sm', 'md']),
    element: PropTypes.element,
    cityName: PropTypes.string,
    temp: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.element,
    tempDesc: PropTypes.string
  };
  
  WheatherCard.defaultProps = {
    title: '',
    width: 'sm',
  };

export default WheatherCard;