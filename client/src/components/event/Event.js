import React from 'react'

export default function Event({ events }) {
  return (
    
    <div>
        <h1>Events</h1>

        <ul>
        { events.map((e, index) => 
        <li key={`org-${index}`}>{e.name}</li>
        )}
        </ul>
    </div>
  )
}
