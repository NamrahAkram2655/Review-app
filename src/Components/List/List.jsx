import React from 'react'
import ListItems from '../ListItems/ListItems'

const List = (props) => {
    return (
        <div>
            {props.dummydata.map((item, index) => {
                return <ListItems item={item} key={index}  id={index}
                deleteHandler={props.deleteHandler}/>
            })}
        </div>
    )
}

export default List
