class Node {
    constructor(choice) {
        this.question = choice;
        this.data = "";
        this.answer = "";
        this.left = null;
        this.right = null;
    }
}

var root = new Node("Friend or Lover?");
root.left = new Node("Friend or Money?");
root.left.data = "Friend";
root.left.left = new Node("Friend or Family?");
root.left.left.data = "Friend";
root.left.left.left = new Node();
root.left.left.left.data = "Friend";
root.left.left.left.answer = "“Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.” — Anais Nin"; // Friend Result
root.left.left.right = new Node();
root.left.left.right.data = "Family";
root.left.left.right.answer = "“The most important thing in the world is family and love.” —John Wooden"; // Family Result
root.left.right = new Node("Money or Lover?");
root.left.right.data = "Money";
root.left.right.left = new Node();
root.left.right.left.data = "Money";
root.left.right.left.answer = "“Money does not buy you happiness, but lack of money certainly buys you misery.” —Daniel Kahneman"; // Money Result
root.left.right.right = new Node();
root.left.right.right.data = "Lover";
root.left.right.right.answer = "“Having someone wonder where you are when you don't come home at night is a very old human need.” —Margart Mead"; // Lover Result
root.right = new Node("Lover or Career?");
root.right.data = "Lover";
root.right.left = new Node("Lover or Ex-Lover?");
root.right.left.data = "Lover";
root.right.left.left = new Node();
root.right.left.left.data = "Lover";
root.right.left.left.answer = "“You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.” —Sam Keen"; // Lover Result
root.right.left.right = new Node();
root.right.left.right.data = "Ex-Lover"; 
root.right.left.right.answer = "“I don't regret you. I don't care how it ended. I don't care about your worst. I remember how it began and how happy it made me. I won;t ever regret you.” —Unknown";// Ex-Lover Result
root.right.right = new Node("Career or Family?");
root.right.right.data = "Career";
root.right.right.left = new Node();
root.right.right.left.data = "Career"; 
root.right.right.left.answer = "“It's not what you achieve, it's what you overcome. That's what defines your career.” —Carlton Fisk";// Career Result
root.right.right.right = new Node();
root.right.right.right.data = "Family"; 
root.right.right.right.answer = "“My family is my life, and everything else comes second as far as what's important to me.” —Michael Imperioli";// Family Result

console.log(root);

var display = document.getElementById("display");
var question = document.getElementById("question");

var probe = root;
var probe_left = probe.left;
var probe_right = probe.right;


function start() {
    console.log(probe, ' ', probe.left, ' ', probe.right);
    question.innerHTML = probe.question;
    document.getElementById("start").style.display = "none";

    let input_left = document.createElement("button");
    input_left.onclick = function() {
        console.log("left");
        console.log(display);

        remove();
        probe = probe_left;
        probe_left = probe.left;
        probe_right = probe.right;
        if (probe_left && probe_right) {
            start();
            question.innerHTML = probe.question;
        } else {
            document.getElementById("question").style.display = "none";
            document.getElementById("answer").innerHTML = probe.answer;
            document.getElementById("answer").style.display = "inline-block"
        }
    };
    input_left.id = probe_left.data;
    input_left.innerHTML = probe_left.data;
    input_left.className = "left";
    console.log(input_left);

    let input_right = document.createElement("button");
    input_right.onclick = function() {
        console.log("left");
        console.log(display);

        remove();
        probe = probe_right
        probe_left = probe.left;
        probe_right = probe.right;
        if (probe_left && probe_right) {
            start();
            question.innerHTML = probe.question;
        } else {
            document.getElementById("question").style.display = "none";
            document.getElementById("answer").innerHTML = probe.answer;
            document.getElementById("answer").style.display = "inline-block"
        }
    };
    input_right.id = probe_right.data;
    input_right.innerHTML = probe_right.data;
    input_right.className = "right";
    console.log(input_right);

    display.appendChild(input_left);
    display.appendChild(input_right);
    console.log(display);
}

function remove() {
    let left = document.getElementById(probe_left.data);
    left.parentNode.removeChild(left);
    let right = document.getElementById(probe_right.data);
    right.parentNode.removeChild(right);
}