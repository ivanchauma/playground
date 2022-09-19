import React, {useState} from 'react'

function Exercise() {
const color = ['red', 'blue', 'green', 'orange', 'yellow']
const [position, setPosition] = useState(1);

const changeButtonColor = () => {

    //Makes sure it doesn't go out of the array length
    if (position < color.length-1) {
        setPosition(position + 1)
    }
    else {
        setPosition(0)
    }
}
  return (
    <div>
        <button style={{'backgroundColor': color[position]}} onClick={changeButtonColor}>Change Color</button>
    </div>

  )
}

export default Exercise