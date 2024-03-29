/* eslint-disable react/prop-types */

function ItemList({items}) {
  return (
    <div>
        <ul>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
        </ul>
    </div>
  )
}

export default ItemList