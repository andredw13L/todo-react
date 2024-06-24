const RemoveAll = ({ removeAllTodos }) => {
  return (
    <div className="remove-all-container">
      <button className="remove-all-button" onClick={removeAllTodos}>
        Remover Todos
      </button>
    </div>
  );
};

export default RemoveAll;
