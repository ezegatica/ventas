import React from 'react'

export default function HomeContainer(props: React.PropsWithChildren<{}>) {
  return (
    <div className="home-container">
        {props.children}
    </div>
  )
}
