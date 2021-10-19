const Button = ({text='Клик',
                mod = "",
                onClick = null,}) => {
  let btnClass = `button ${mod}`;

    return (
      <button className={btnClass}
              onClick={onClick}>
        {text}
      </button>
    )
}
export default Button;