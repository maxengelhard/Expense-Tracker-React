import React from 'react'

export const Transcation = ({transcation}) => {
    return (
    <li className="minus">
        {transcation.text} <span>-$400</span><button className="delete-btn">x</button>
    </li>
    )
}
