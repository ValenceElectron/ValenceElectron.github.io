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
            <div id="space"></div>
            <div id="body">
                <div id="grad">
                    <h1>Education</h1>
                    <p>
                        I graduated from California State University, Sacramento
                        <br> B.S. in Computer Science, Concentration in Computer Architecture, 2023
                    </p>
                </div>
                <p>
                    Put more stuff here
                <p>
                    <a href="/experience" data-link>View recent posts here</a>.
                </p>
            </div>
        `;
    }
}
