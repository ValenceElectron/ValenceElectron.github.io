import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Anthony Alaman");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="./static/css/app.css">
            <header>
                <div></div>
                <h1>
                    <p class="title">My Experience</p>
                </h1>
            </header>
            <div id="about">
                <p>
                    I've completed work as a freelance student developer on a few projects.
                    <br>The clients were found by my professors, but we students
                    <br>were in charge of the entire SDLC, from requirements engineering,
                    <br>project development and testing, writing documentation, and deployment.
                </p>
            </div>
            <div id="xp-body">
                <div id="exp1">
                    <h2>Fantasy Challenge</h2>
                    <p>
                        I filled the role of a full-stack developer, and I lead the charge on developing
                        the backend. My focus was primarily on our logic and RESTful API, where I
                        designed our systems for handling CRUD data (Create, Read, Update, Delete),
                        such as user accounts. I also helped design visual elements such as webpages
                        and navigation bars, to help round out my web development experience.<br><br>

                        Alongside developing features, I also participated in the entire SDLC (software
                        development life cycle). I took part in biweekly meetings with our client
                        where my team would demonstrate the features that we've developed, receive
                        feedback, and refine the design according to our client's requirements. I also
                        participated in authoring extensive documentation for deployment, testing,
                        maintenance.<br><br>

                        To the right are images showing off the landing and login pages. Our work was
                        done using React.js/HTML/CSS for the frontend, and Node.js/Express.js/MariaDB
                        on the backend.
                    <p>
                </div>
                <div id="exp1-pics">
                    <img src="./static/assets/exp1-1.png" alt="Fantasy Challenge home page"/>
                    <img src="./static/assets/exp1-2.png" alt="Fantasy Challenge login page"/>
                </div>
        `;
    }
}
