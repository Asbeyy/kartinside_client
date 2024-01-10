import React from 'react'
import './style/selector_card.css'

function Selector_card(props: {category: string, page: string}) {
  return (
    <a href={`./${props.page}`} className="card">
        {props.category}
    </a>
  )
}

export default Selector_card