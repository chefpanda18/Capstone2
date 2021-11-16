import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const ExpensesList = () => {
    const context = useContext(GlobalContext);

    console.log(context)

    return (
        <div>
            <h3>Expense List</h3>
            <ul>
                <li>
                    Cash <span>-$400</span><button>X</button>
                </li>
            </ul>
        </div>
    )
}
