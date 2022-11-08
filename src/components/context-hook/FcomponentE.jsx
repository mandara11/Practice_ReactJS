import React, {useContext} from 'react'
import FcomponentF from './FcomponentF'
import {UserContext,ChannelContext} from '../../../src/App'

function FcomponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default FcomponentE
