import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" type="text/css" href="./frontend/static/css/Projects.css">
            <header>
                <div></div>
                <h1>
                    <p class="title">Projects</p>
                </h1>
            </header>
            <div id="about">
                <p>
                    I've worked on a number of projects that I believe showcase my skills quite nicely.
                    <br>Ranging from projects that I started during my undergrad, to this very website.
                </p>
            </div>
            <div id="body">
                <div id="pj1">
                    <h2><a href="https://github.com/ValenceElectron/gmon">gmon</a></h2>
                    <p>
                        gmon is a FOSS project. I developed it with
                        Java, Java Swing, and Bash. It's built to be easily extensible and work on
                        any Linux distro.<br><br>

                        gmon is a tool to manage Nvidia GPU fanspeeds on Linux. It has a UI that
                        displays the current GPU temperature and fan speed as reported by the
                        nvidia-smi tool packaged with the Nvidia drivers. Using a config file,
                        users can add points on a graph to make a fan curve, where temperature
                        (in Celsius) is the X-axis, and fan speed (in percentage) is the y-axis.
                        When hovering over either fan speed or temperature, the software will also
                        report the average and peak values.
                    </p>
                </div>
                <div id="pj2">
                    <h2><a href="./frontend/static/assets/proj2-1.png">16-bit MIPS Architecture Microprocessor</a></h2>
                    <p>
                        As part of my Advanced Computer Architecture elective, we were required to design
                        a 16-bit MIPS ISA Microprocessor in Logisim according to requirements that
                        our professor gave us. Along with the circuit in the diagram, we were required
                        to write programs in binary to accomplish various tasks set forth by our
                        professor, like calculating the Fibonacci sequence, or constantly looping and
                        printing out our names.
                    </p>
                </div>
                <div id="pj3">
                    <h2><a href="https://github.com/ValenceElectron/dynamate">Dynamate</a></h2>
                    <p>
                        Dynamate is a FOSS project. Developed with C++, GLFW, and OpenGL. It's currently only
                        available for Linux, but can be easily ported to Windows.<br> <br>

                        Dynamate is a lightweight, 2D, graphics engine geared specifically for rendering animated elements
                        to the desktop. It instantiates a transparent window using GLFW and renders the graphics objects onto
                        the window surface. The driving idea behind the project is to allow users to decorate their desktops
                        with animated characters or objects, and it's open source to promote creativity from the users and incentivize
                        them to create their own graphical scenes with the project.
                    </p>
                </div>
            </div>
            <div id="pj4">
                <h2>Less Notable Works</h2>
                <p>
                    I've worked on many smaller projects that are public on my github.<br>

                    <a href="https://github.com/ValenceElectron/6502_Project">
                        The start of an NES game written in 6502 Assembly
                    </a><br>

                    <a href="https://github.com/ValenceElectron/MIDIKey">
                        A tool to convert MIDI inputs into keyboard inputs using Linux Bash
                    </a><br>

                    <a href="https://github.com/ValenceElectron/BEM">
                        Labbing out symmetric encryption for used in messaging.
                    </a><br>
                </p>
            </div>
        `;
    }
}
