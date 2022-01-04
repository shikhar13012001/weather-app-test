import React from 'react'

const Key = (props) => {
    const {title,value}=props;
    return (
        <div className="key">
       <small>{`${title} `}</small>
       <h2>{value}</h2>
       </div>
    )
}

export default Key
