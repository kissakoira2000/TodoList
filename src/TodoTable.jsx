
import React from 'react';

export default function TodoList(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => props.handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
