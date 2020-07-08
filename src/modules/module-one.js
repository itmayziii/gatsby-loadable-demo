import React from 'react'
import { Link } from 'gatsby'

export default function ModuleOne ({ moduleIndex }) {
  return (
    <section key={moduleIndex.toString()} data-module-index={moduleIndex.toString()}>
      <h1>Welcome to Module One!</h1>
      <ul>
        <li><Link to='/another-page'>Go to Another Page</Link></li>
      </ul>
    </section>
  )
}
