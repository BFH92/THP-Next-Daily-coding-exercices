import React from 'react'

const ReadBtn = (props) => {

  const [read, setRead] = React.useState(props.params);
  
  const chgValue = () => {
    setRead(!read)
  console.log(read)
  }
  return(
    <div>
      <button onClick={chgValue} className={read ? "button__active" : null}>Add to WhishList</button>  
    </div>  
  )

}



export default ReadBtn