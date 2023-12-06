function SingleUser({user}) {
    return (
        <h3>
        {user.email} <br/> 
        {user.company.name} <br/>
         {user.phone} <br/>
         {user.address.city} <br/>
         {user.website} <br/>
         {user.company.catchPhrase}
         </h3>
    )
}

export default SingleUser