import React from 'react'

//step2:provide a context value.   //we need provide this usercontext using userprovider component.(app.js)
//step3:Consume context value.(ComponentF.js)
//Step1:create the context
const UserContext = React.createContext('default value')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}

//we need to export UserContext itself
export default UserContext
