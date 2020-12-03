const Contacts = props => {
    const contactsArray = props.value;
    const output = contactsArray.map(obj => <div key={obj.id}>{obj.website}:{obj.username}</div>)

    return (
        <>
            <h3>Contacts</h3>
            {output}
        </>
    )
}

export default Contacts;