import './SeasonDisplay.css'

import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    // good practise, root element should be something like the component name.
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon ic-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon ic-right`} />
    </div>
  )
}

export default SeasonDisplay