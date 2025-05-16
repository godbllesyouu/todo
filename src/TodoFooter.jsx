function TodoFooter({ todos, onClearCompleted}) {
   const completedSize = todos.filter((todo) => todos.isCompladet).length;
    return (
        <div className="title">
            <span>{completedSize}/{todos.length} Completd</span>
            <button onClick={onClearCompleted}>Clear Completd</button>
        </div>
    )
}
export default TodoFooter;