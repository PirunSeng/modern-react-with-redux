import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('Programming')
  const [results, setResults] = useState([])


  useEffect(() => {
    // define and func and invoke it immediately
    // way 1
    // (async () => {
    //   await axios.get('....')
    // })()

    // way 2 (recommended)
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action:'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }
      })
      setResults(response.data.query.search)
    }

    if (term && !results.length) {
      search()
    } else {
      const timeoutId = setTimeout(() => {
        if (term) search()
      }, 500)
  
      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [term])

  const redneredResults = results?.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {redneredResults}
      </div>
    </div>
  )
}

export default Search
