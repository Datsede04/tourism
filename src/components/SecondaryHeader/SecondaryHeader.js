import React from 'react'

const SecondaryHeader = (props) => {
  return (
    <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary ">
            {props.title}
        </h2>
    </div>

  )
}

export default SecondaryHeader