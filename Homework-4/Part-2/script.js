class Node {
    constructor(choice) {
        this.question = choice;
        this.data = "";
        this.answer = "";
        this.left = null;
        this.mid = null;
        this.right = null;
    }
}

var root = new Node("Friend or Education or Lover?");

root.left = new Node("Friend or Power or Money?");
root.left.data = "Friend";

root.left.left = new Node("Friend or Passion or Family?");
root.left.left.data = "Friend";
root.left.left.left = new Node();
root.left.left.left.data = "Friend";
root.left.left.left.answer = "“Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.” —Anais Nin"; // Friend Result
root.left.left.mid = new Node();
root.left.left.mid.data = "Passion";
root.left.left.mid.answer = "“Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.” —Harriet Tubman"; // Passion answer
root.left.left.right = new Node();
root.left.left.right.data = "Family";
root.left.left.right.answer = "“The most important thing in the world is family and love.” —John Wooden"; // Family Result

root.left.mid = new Node("Passion or Family or Lover?");
root.left.mid.data = "Passion";
root.left.mid.left = new Node();
root.left.mid.left.data = "Passion";
root.left.mid.left.answer = "“Nothing is as important as passion. No matter what you want to do with your life, be passionate.” —Jon Bon Jovi"; // Passion answer
root.left.mid.mid = new Node();
root.left.mid.mid.data = "Family";
root.left.mid.mid.answer = "“The great advantage of living in a large family is that early lesson of life’s essential unfairness.” —Nancy Mitford"; // Family answer
root.left.mid.right = new Node();
root.left.mid.right.data = "Lover";
root.left.mid.right.answer = "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.” —Lao Tzu"; // Lover answer

root.left.right = new Node("Money or Power or Lover?");
root.left.right.data = "Money";
root.left.right.left = new Node();
root.left.right.left.data = "Money";
root.left.right.left.answer = "“Money does not buy you happiness, but lack of money certainly buys you misery.” —Daniel Kahneman"; // Money Result
root.left.right.mid = new Node();
root.left.right.mid.data = "Power";
root.left.right.mid.answer = "“When you start to develop your powers of empathy and imagination, the whole world opens up to you.” —Susan Sarandon"; // Power answer
root.left.right.right = new Node();
root.left.right.right.data = "Lover";
root.left.right.right.answer = "“Having someone wonder where you are when you don't come home at night is a very old human need.” —Margart Mead"; // Lover Result

root.mid = new Node("Education or Passion or Power?");
root.mid.data = "Education";

root.mid.left = new Node("Education or Family or Lover?");
root.mid.left.data = "Education";
root.mid.left.left = new Node();
root.mid.left.left.data = "Education";
root.mid.left.left.answer = "“The more that you read, the more things you will know, the more that you learn, the more places you'll go.” —Dr. Seuss"; // Education answer
root.mid.left.mid = new Node();
root.mid.left.mid.data = "Family";
root.mid.left.mid.answer = "“What can you do to promote world peace? Go home and love your family.” —Mother Teresa"; // Family answer
root.mid.left.right = new Node();
root.mid.left.right.data = "Lover";
root.mid.left.right.answer = "“When you're lucky enough to meet your one person, then life takes a turn for the best. It can't get better than that.” —John Krasinski"; // Lover answer

root.mid.mid = new Node("Passion or Family or Lover?");
root.mid.mid.data = "Passion";
root.mid.mid.left = new Node();
root.mid.mid.left.data = "Passion";
root.mid.mid.left.answer = "“You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.” —Steve Jobs"; // Passion answer
root.mid.mid.mid = new Node();
root.mid.mid.mid.data = "Family";
root.mid.mid.mid.answer = "“Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.” —Lisa Weed"; // Family answer
root.mid.mid.right = new Node();
root.mid.mid.right.data = "Lover";
root.mid.mid.right.answer = "“If you find someone you love in your life, then hang on to that love.” —Princess Diana"; // Lover answer

root.mid.right = new Node("Power or Family or Lover?");
root.mid.right.data = "Power";
root.mid.right.left = new Node();
root.mid.right.left.data = "Power";
root.mid.right.left.answer = "“The only way to predict the future is to have power to shape the future.” —Eric Hoffer"; // Power answer
root.mid.right.mid = new Node();
root.mid.right.mid.data = "Family";
root.mid.right.mid.answer = "“Families are like branches on a tree. We grow in different directions yet our roots remain as one.” —Anonymous."; // Family answer
root.mid.right.right = new Node();
root.mid.right.right.data = "Lover";
root.mid.right.right.answer = "“When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.” —Nora Ephron"; // Lover answer

root.right = new Node("Lover or Passion or Career?");
root.right.data = "Lover";

root.right.left = new Node("Lover or Friend or Ex-Lover?");
root.right.left.data = "Lover";
root.right.left.left = new Node();
root.right.left.left.data = "Lover";
root.right.left.left.answer = "“You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.” —Sam Keen"; // Lover Result
root.right.left.mid = new Node();
root.right.left.mid.data = "Friend";
root.right.left.mid.answer = "“I would rather walk with a friend in the dark, than alone in the light.” —Helen Keller"; // Friend answer
root.right.left.right = new Node();
root.right.left.right.data = "Ex-Lover"; 
root.right.left.right.answer = "“I don't regret you. I don't care how it ended. I don't care about your worst. I remember how it began and how happy it made me. I won;t ever regret you.” —Unknown";// Ex-Lover Result

root.right.mid = new Node("Passion or Education or Power");
root.right.mid.data = "Passion";
root.right.mid.left = new Node();
root.right.mid.left.data = "Passion";
root.right.mid.left.answer = "“If you feel like there's something out there that you're supposed to be doing, if you have a passion for it, then stop wishing and just do it.” —Wanda Skyes"; // Passion answer
root.right.mid.mid = new Node();
root.right.mid.mid.data = "Education";
root.right.mid.mid.answer = "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X"; // Education answer
root.right.mid.right = new Node();
root.right.mid.right.data = "Power";
root.right.mid.right.answer = "“Power is not an institution, and not a structure; neither is it a certain strength we are endowed with; it is the name that one attributes to a complex strategical situation in a particular society.” —Michel Foucault"; // Power answer

root.right.right = new Node("Career or Passion or Family?");
root.right.right.data = "Career";
root.right.right.left = new Node();
root.right.right.left.data = "Career"; 
root.right.right.left.answer = "“It's not what you achieve, it's what you overcome. That's what defines your career.” —Carlton Fisk";// Career Result
root.right.right.mid = new Node();
root.right.right.mid.data = "Passion";
root.right.right.mid.answer = "“I have no special talents. I am only passionately curious.” —Albert Einstein"; // Passion answer
root.right.right.right = new Node();
root.right.right.right.data = "Family"; 
root.right.right.right.answer = "“My family is my life, and everything else comes second as far as what's important to me.” —Michael Imperioli";// Family Result

// console.log(root); DEBUG

var display = document.getElementById("display");
var question = document.getElementById("question");

var probe = root;
var probe_left = probe.left;
var probe_mid = probe.mid;
var probe_right = probe.right;


function start() {
    // console.log(probe, ' ', probe.left, ' ', probe.right); DEBUG
    question.innerHTML = probe.question;
    document.getElementById("start").style.display = "none";

    let input_left = document.createElement("button");
    input_left.onclick = function() {
        remove();
        probe = probe_left;
        probe_left = probe.left;
        probe_mid = probe.mid;
        probe_right = probe.right;
        if (probe_left && probe_mid && probe_right) {
            start();
            question.innerHTML = probe.question;
        } else {
            document.getElementById("restart").style.display = "block";
            document.getElementById("question").style.display = "none";
            document.getElementById("answer").innerHTML = probe.answer;
            document.getElementById("answer").style.display = "inline-block"
        }
    };
    input_left.id = probe_left.data;
    input_left.innerHTML = probe_left.data;
    input_left.className = "left";

    let input_mid = document.createElement("button");
    input_mid.onclick = function() {
        remove();
        probe = probe_mid;
        probe_left = probe.left;
        probe_mid = probe.mid;
        probe_right = probe.right;
        if (probe_left && probe_mid && probe_right) {
            start();
            question.innerHTML = probe.question;
        } else {
            document.getElementById("restart").style.display = "block";
            document.getElementById("question").style.display = "none";
            document.getElementById("answer").innerHTML = probe.answer;
            document.getElementById("answer").style.display = "inline-block"
        }
    };
    input_mid.id = probe_mid.data;
    input_mid.innerHTML = probe_mid.data;
    input_mid.className = "mid";

    let input_right = document.createElement("button");
    input_right.onclick = function() {
        remove();
        probe = probe_right
        probe_left = probe.left;
        probe_right = probe.right;
        if (probe_left && probe_mid && probe_right) {
            start();
            question.innerHTML = probe.question;
        } else {
            document.getElementById("restart").style.display = "block";
            document.getElementById("question").style.display = "none";
            document.getElementById("answer").innerHTML = probe.answer;
            document.getElementById("answer").style.display = "inline-block"
        }
    };
    input_right.id = probe_right.data;
    input_right.innerHTML = probe_right.data;
    input_right.className = "right";

    display.appendChild(input_left);
    display.appendChild(input_mid);
    display.appendChild(input_right);
}

function remove() {
    let left = document.getElementById(probe_left.data);
    left.parentNode.removeChild(left);
    let mid = document.getElementById(probe_mid.data);
    mid.parentNode.removeChild(mid);
    let right = document.getElementById(probe_right.data);
    right.parentNode.removeChild(right);
}

function restart() {
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").style.display = "none";
    document.getElementById("restart").style.display = "none";

    probe = root;
    probe_left = probe.left;
    probe_mid = probe.mid;
    probe_right = probe.right;

    start();
    document.getElementById("question").style.display = "inline";
}