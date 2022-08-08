import "./header.css"

export function Header() {
  return (
    <header>
      <div className="buttons">
        <a className="btn fs-5" href='/Home'>Home</a>
        <a className="btn fs-5" href='/login'>Logout</a>
        <a className="btn fs-5" href='/profile'>Profile</a>
      </div>
    </header>
  )
}