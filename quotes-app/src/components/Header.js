import './Header.css'

export function Header({ ...props }) {
  return (
    <div className="header">
      <img src="https://media1.giphy.com/media/2A4A9kI7YFXC789O7A/giphy.gif" className="header__logo" />

      <h1>Quotes App</h1>
    </div>
  );
}
