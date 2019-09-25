import React from 'react';
import HomePage from './Homepage'
import Registration from './Registration'
class Root extends React.Component{
    render (){
        return (
            <div>
               {/* <Registration/> */}
               <HomePage/>
            </div>
        );
    }
}
export default Root
