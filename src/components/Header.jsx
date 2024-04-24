import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>ReactFood</h1>
      </div>
      <button className="text-button">Cart (2)</button>
    </header>
  );
}
