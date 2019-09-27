import React from 'react';
import Button from '../Button'
import Card from '../Card'
import Cards from '../Cards'
import RadioGroup from '../RadioGroup'
import Header from '../Header'
import TextField from '../TextField'
const Flexi =({config,handleChange, onFlexiSubmit })=>{
    let items = config.items;

     let getChild = items =>{
         return items.map (e =>{
             return displayField (e);
         });
     };
    
     console.log(getChild,"get")
     const displayField = e =>{
         if(e.children){
             return getChild(e.children.items);
         }else {
             let type = e.type;
             switch (type){
                 case "Card":
                     return <Card props ={e.props} />;
                       
                case "Cards" :
                    return <Cards props = {e.props}/>;
                        
                case "Header" :
                    return <Header props = {e.props}/>;
                        
                case "TextField" :
                    return <TextField props = {e.props} handleChange={handleChange}/>
                case "Button" :
                    return <Button props ={e.props} onFlexiSubmit={onFlexiSubmit}/>
                case "RadioGroup" :
                    return <RadioGroup props= {e.props} handleChange={handleChange}/>
                default :
                    return null;
             }
         }
     }
     return <div>{getChild (items )}</div>
}
export default Flexi;