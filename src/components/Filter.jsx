const Filter = ({filter, setFilter}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select
                 value={filter} 
                 onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="incomplete">Incompletas</option>
                </select>
            </div>
                <div>
                <p>Ordem alfabética:</p>
                <button>Ascendente</button>
                <button>Descendente</button>
            </div>
        </div>
    </div>
  )
}

export default Filter