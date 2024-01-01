import React from 'react'
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Recentitem from './recentitem';

const RecentSearch = () => {

    const searches = [
        {
            id: 1,
            item: 'tomatoes',
            time: 5,
            people: 3
        },
        {
            id: 2,
            item: 'shoes',
            time: 15,
            people: 34
        },
        {
            id: 3,
            item: 'bags',
            time: 3,
            people: 3
        }
    ]
    return (
        <>
            <Div display="flex" justify="space-between" padding="35px 0 0 0" fs="10px">
                <SpottrP fw="">Recent Search</SpottrP>
                <SpottrP color="#274b89" fw="bold">Clear all</SpottrP>
            </Div>
            <Div>
                {
                    searches.map((item, index) => (
                        <Recentitem key={index} item={item.item} time={item.time} people={item.people} />
                    ))
                }
            </Div>
        </>
    )
}

export default RecentSearch
