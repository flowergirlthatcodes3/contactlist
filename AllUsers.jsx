function AllUsers({users, hash}) {


    return (
        <ul>
            {
                users.map((user) => {
                    return(
                        <li key={user.id} className={hash === user.id ? "selected" : ""}>
                            <a href={`#${user.id === hash ? "" : user.id}`}> {user.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default AllUsers