import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transcation} from './Transcation'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transcation => <Transcation key={transcation.id} transcation={transcation}/>)}
                
            </ul>
        </div>
    )
}
