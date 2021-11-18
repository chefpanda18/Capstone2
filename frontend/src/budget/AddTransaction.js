import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] =useState(0)

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
	  e.preventDefault();

	  const newTransaction = {
		//   should change to UUID for future
		  id: Math.floor(Math.random() * 100000000),
		  text,
		//   changes amount from string to number
		  amount: +amount
	  }
	  addTransaction(newTransaction);
  }

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="text">Description</label>
					<input
            value={text}
            onChange={(e) => setText(e.target.value)}
						type="text"
						className="form-control"
						id="text"
						placeholder="expense description"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Transaction amount<br />(positive numbers are income and negative numbers are expenses)</label>
					<input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number" 
            className="form-control" 
            id="amount" 
            placeholder="expense amount" />
				</div>
				<button type="submit" className="btn btn-primary">
					Add expense
				</button>
			</form>
		</div>
	);
};
