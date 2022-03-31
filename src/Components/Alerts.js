import React from 'react'

export default function Alerts(props) {
  return (
    <div className="alert alert-success" style={{position:"sticky", top:"0",zIndex:"15"}} role="alert">
          {props.alert}
        </div>
  )
}
