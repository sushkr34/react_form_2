import React from 'react';
import Button from '../Button'
import Card from '../Card'
import Cards from '../Cards'
import RadioGroup from '../RadioGroup'
import Header from '../Header'
import TextField from '../TextField'
class Flexi extends React.Component {
    render() {
        const { config={} } = this.props;
        console.log(this.props, "flexi")
        const { items =[] } = config;
        console.log(items, "items")

        return (
            <div>
                {items.map((el) => {
                    if (el.type === "Header") {
                        if (el.children){
                            return ( <Flexi congif={el.props}/>)
                        }
                        return (
                            // <Header
                            //     label={el.props.label}
                            //     horizontalAlign={el.props.horizontalAlign}
                            //     verticalAlign={el.props.verticalAlign}
                            // />
                            <Header props={el.props}/>
                        )
                    }
                    if (el.type === "Card") {
                        if (el.children){
                            return ( <Flexi congif={el.props}/>)
                        }
                        return (
                            <Card
                                label={el.props.label}
                            />
                        )
                    }
                    if (el.type === "Button") {

                        return (
                            <Button
                                label={el.props.label}
                            />
                        )
                    }
                    if (el.type === "Cards") {
                        if (el.children){
                            return ( <Flexi congif={el.props}/>)
                        }

                        return (
                            <Cards
                                label={el.props.label}
                            />
                        )
                    }
                    if (el.type === "RadioGroup") {

                        return (
                            <RadioGroup
                                label={el.props.label}
                            />
                        )
                    }
                    if (el.type === "TextField") {

                        return (
                            <TextField
                                label={el.props.label}
                            />
                        )
                    }
                    return null
                })}
            </div>
        )
    }
}
export default Flexi;