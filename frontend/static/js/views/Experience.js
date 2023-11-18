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
        `;
    }
}
