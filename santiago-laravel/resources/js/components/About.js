import React from 'react'

export default function About() {
  return (
    <div>About</div>
  )
}
if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}