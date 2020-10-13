import React from 'react';

const Searchbox = ({searchChange}) =>{
    return (
        <div className="pa2">
            <input className="pa3 b--green ba bg-lightest-blue" type="search" 
            placeholder="search friends" onChange={searchChange}/>
        </div>
    )
}
export default Searchbox;