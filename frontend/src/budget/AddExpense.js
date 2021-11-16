import React, {useState} from 'react';

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] =useState(0)

	return (
		<div>
			<form>
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
					<label htmlFor="amount">Expense amount<br />(negative - expense)</label>
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
