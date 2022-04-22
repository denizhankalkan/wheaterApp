import React from 'react';

const EmptyPage = () => {

return(
<>
    <div class="column" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 50}}>
       <div>
        <span style={{color: 'red', fontSize: '25px'}}>No city is selected!</span>
       </div>
        <div style={{marginTop: 20}}>
         <span>Type a valid city name to get weekly forecast data</span>
       </div>     
     </div>
</>
  )
}

export default EmptyPage;