
import {  Link } from "react-router-dom";
import "../style/Home.css";
import PageNav from "../component/PageNav";

function Homepage() {
  return (
    <main className="home">
          <PageNav />

      <section>
            
          <h1>you travel the world<br/>
            WorldWise keeps track of your Application.</h1>
          <h2>
            A world map that track your footsteps into every you can think of. Never forget your wonderful exprience , and show your friends how your have wondered the world.
          </h2>
           <span  className="start-btn"> <Link to="/app">Start Tracking Now</Link></span>
      </section>
    </main>
  )
}

export default Homepage
