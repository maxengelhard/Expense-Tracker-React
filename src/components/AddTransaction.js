import React, {useState}from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    <input type="number" value ={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </label>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
