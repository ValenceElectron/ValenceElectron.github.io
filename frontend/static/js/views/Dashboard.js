import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Anthony Alaman");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="./static/css/app.css">
            <h1>
                <p class="title">About Me</p>
            </h1>
            <div id="about">
                <p>
                    My name is Anthony Alaman. I'm extremely interested in all things computing.
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
                        Java, Javascript, HTML, CSS, C, C++
                    <p>
                </div>
                <div id="frameworks">
                    <h2>Known Frameworks</h2>
                    <p>
                        Node.js, Express.js, React.js, Codename One
                    </p>
                </div>
                <div id="Known Libraries">
                    <a href="/experience" data-link>View recent posts here</a>.
            </div>
        `;
    }
}
