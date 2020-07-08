import React from 'react'
import { Link } from 'gatsby'

export default function ModuleTwo ({ moduleIndex }) {
  return (
    <section key={moduleIndex.toString()} data-module-index={moduleIndex.toString()}>
      <h1>Welcome to Module Two!</h1>
      <ul>
        <li><Link to='/'>Go to Home Page</Link></li>
      </ul>
    </section>
  )
}
