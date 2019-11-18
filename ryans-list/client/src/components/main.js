import React from "react"
import { useUsers } from "../hooks"

function Main() {
  const {
    users,
    sub,
    subOne,
    subTwo,
    subThree,
    subFour,
    subFive,
    subSix,
    subSeven
  } = useUsers()

  return (
    <div>
      <div>
        {users.name1}
        {subOne.map(user => (
          <p key={user.id}>{user.name1}</p>
        ))}
      </div>
      <div>
        {users.name2}
        {subTwo.map(user => (
          <p key={user.id}>{user.name2}</p>
        ))}
      </div>
      <div>
        {users.name3}
        {subThree.map(user => (
          <p key={user.id}>{user.name3}</p>
        ))}
      </div>
      <div>
        {users.name4}
        {subFour.map(user => (
          <p key={user.id}>{user.name4}</p>
        ))}
      </div>
      <div>
        {users.name5}
        {subFive.map(user => (
          <p key={user.id}>{user.name5}</p>
        ))}
      </div>
      <div>
        {users.name6}
        {subSix.map(user => (
          <p key={user.id}>{user.name6}</p>
        ))}
      </div>
      <div>
        {users.name7}
        {subSeven.map(user => (
          <p key={user.id}>{user.name7}</p>
        ))}
      </div>
    </div>
  )
}

export default Main
