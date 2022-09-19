const Father = (props) => {
    return(
        <div>
            Soy un div Father.
            {props.children}
            {props.ul}
        </div>
    )
}

export default Father;