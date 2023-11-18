import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Anthony Alaman");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" type="text/css" href="./frontend/static/css/Dashboard.css">
            <header>
                <div></div>
                <h1>
                    <p class="title">About Me</p>
                </h1>
            </header>
            <div id="about">
                <p>
                    My name is Anthony Alaman. I'm fascinated by all things science and computing,
                    <br>but I have a special love for low-level computer science concepts,
                    <br>such as computer hardware architecture.
                </p>
            </div>
            <div id="body">
                <div id="grad">
                    <h2>Education</h2>
                    <p>
                        B.S. in Computer Science, <br>Concentration in Computer Architecture,
                        <br>CSU Sacramento, 2023
                    </p>
                </div>
                <div id="languages">
                    <h2>Known Programming Languages</h2>
                    <p>
                        Java, Javascript/HTML/CSS, C, C++, MySQL
                    <p>
                </div>
                <div id="frameworks">
                    <h2>Known Frameworks</h2>
                    <p>
                        Express.js, React.js, Codename One
                    </p>
                </div>
                <div id="libraries">
                    <h2>Known Libraries</h2>
                    <p>
                        OpenSSL, OpenGL, GLM, Codename One, Java Swing
                    </p>
                </div>
                <div id="tools">
                    <h2>Known Tools</h2>
                    <p>
                        Logisim, Git, Github, Jira, Make, Linux
                    </p>
                </div>
                <div id="more">
                    <h2>Check Out What I've Done</h2>
                    <p>
                        <a href="/experience" data-link>My work experience</a>
                        <br>
                        <a href="/projects" data-link>My personal projects</a>
                    </p>
                </div>
            </div>
        `;
    }
}
