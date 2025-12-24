
function Button({children,onClick, type}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
