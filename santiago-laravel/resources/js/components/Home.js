import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}