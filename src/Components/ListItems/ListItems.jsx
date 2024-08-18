import React from 'react'

const ListItems = (props) => {

    const deleteData = () => {
        props.deleteHandler(props.id);
        console.log(props.id);
    }

    return (
        <div className='container input-group'>
            <li className='m-1 d-flex justify-content-between'>
                {props.item}

                <div>
                    <button className='btn-danger p-1' onClick={deleteData}>delete</button>
                    <button className='btn-success p-1'>Edit</button>
                </div>
            </li>
        </div>
    )
}

export default ListItems
