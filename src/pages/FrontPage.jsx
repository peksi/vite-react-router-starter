import Nav from "../components/Nav";

const FrontPage = () => {
  return (
    <div className="container">
      <Nav />
      <div className="box">
        <h1>Front Page</h1>
        <p>
          This is a simple front page. You can navigate to the about page by
          clicking the link in the navigation bar.
        </p>
      </div>
      <div className="box">Projects, dunno 🤷‍♂️</div>
    </div>
  );
};

export default FrontPage;
