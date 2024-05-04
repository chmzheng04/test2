import React from "react";
import useSWR from "swr" ;
const todosEnd point ="http://localhost:3001/todos" ;
const getData = async() => {
	const response = awaitfetch(todosEndpoint);
	return await response.json( );
};
const TodoApp = () => {
	const { data: todos } = useSWR(todosEndpoint,getData);
	
	return (
		<div>
			{todos && todos.map(todo=> (
				<divkey={todo.id}>{todo.title}</div>
			)}
		</div>
};
export default TodoApp;