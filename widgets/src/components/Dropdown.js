import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return

      setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick)

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }

  }, [])

  const renderedOptions = options.map(opt => {
    if (opt.value === selected.value) return null

    return (
      <div
        key={opt.value}
        className="item"
        onClick={() => onSelectedChange(opt)}  
      >
        {opt.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open )}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
