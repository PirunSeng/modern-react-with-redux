import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end JS framework.'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is awesome!'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'We use React by creating components.'
//   }
// ]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label:'The green color',
    value: 'green'
  },
  {
    label: 'The yellow color',
    value: 'yellow'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {
        showDropdown ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        ) : null
      }
    </div>
  )
}
