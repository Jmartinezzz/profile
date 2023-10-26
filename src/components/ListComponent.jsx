import * as React from "react"

const ListComponent = ({ listItems }) => (
  <div className="school">
    <div className="grid grid-cols-1">
      <div className="text-gray block xl:inline font-light">
        <ul className="list">
          {listItems.map(item => {
            if (typeof item === "object") {
              return (
                <li key={item.experience}>
                  <div className="text-lg">{item.experience}</div>
                  <p className="text-sm max-w-none">{item.details}</p>
                </li>
              )
            } else {
              return <li className="text-lg" key={item}>{item}</li>
            }
          })}
        </ul>
      </div>
    </div>
  </div>
)

export default ListComponent
