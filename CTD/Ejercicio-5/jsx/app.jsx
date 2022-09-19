const ul = (
    <ul id="list-1">
        <li key={1}>soy</li>
        <li key={2}>una</li>
        <li key={3}>lista</li>
    </ul>
)

const h2 = (
    <h2>Listado</h2>
)


ReactDOM.render(
    [h2,ul],
    document.querySelector("body")
)