document.addEventListener("DOMContentLoaded", function() {
    const gameText = document.getElementById("game-text");
    const userNameInput = document.getElementById("user-name");
    const startBtn = document.getElementById("start-btn");
    const choicesDiv = document.getElementById("choices");
    const choiceButtons = document.querySelectorAll(".choice-btn");
    const resultText = document.getElementById("result");

    let userName = "";
    let currentScene = 0;

    const scenes = [
        {
            text: "You face the Shadow of Self-Doubt. It whispers: 'You are not good enough.'",
            choices: [
                { text: "Fight back with affirmations 💪", result: "The shadow shrinks! +10 Confidence!", points: 10 },
                { text: "Ignore it and move forward 🚶‍♀️", result: "Doubt lingers... No points gained.", points: 0 },
                { text: "Analyze where this thought comes from 🧐", result: "You gain self-awareness! +10 Wisdom!", points: 10 }
            ]
        },
        {
            text: "You reach the Bridge of Anxiety. It trembles beneath your feet.",
            choices: [
                { text: "Take a deep breath and step forward 🌬️", result: "You gain resilience! +10 Strength!", points: 10 },
                { text: "Turn back and avoid the bridge 🚫", result: "You missed out on growth. No points gained.", points: 0 },
                { text: "Call a friend for support 📞", result: "Connection strengthens you! +10 Friendship!", points: 10 }
            ]
        },
        {
            text: "You stand before the Maze of Societal Expectations.",
            choices: [
                { text: "Embrace imperfection and keep going 🌟", result: "Self-compassion unlocked! +10 Love!", points: 10 },
                { text: "Compare yourself to others 🤷‍♀️", result: "Self-doubt grows. No points gained.", points: 0 },
                { text: "Challenge societal norms 🌈", result: "Empowerment unlocked! +10 Freedom!", points: 10 }
            ]
        }
    ];

    startBtn.addEventListener("click", function() {
        userName = userNameInput.value || "Warrior";
        gameText.innerText = `${userName}, ${scenes[currentScene].text}`;
        startBtn.style.display = "none";
        userNameInput.style.display = "none";
        showChoices();
    });

    function showChoices() {
        choicesDiv.classList.remove("hidden");
        scenes[currentScene].choices.forEach((choice, index) => {
            choiceButtons[index].innerText = choice.text;
            choiceButtons[index].onclick = function() {
                handleChoice(index);
            };
        });
    }

    function handleChoice(choiceIndex) {
        resultText.innerText = scenes[currentScene].choices[choiceIndex].result;
        currentScene++;
        
        if (currentScene < scenes.length) {
            setTimeout(() => {
                gameText.innerText = scenes[currentScene].text;
                resultText.innerText = "";
                showChoices();
            }, 2000);
        } else {
            setTimeout(() => {
                gameText.innerText = `Congratulations, ${userName}! You have faced your shadows and emerged stronger! 🌟✨`;
                choicesDiv.style.display = "none";
                resultText.innerText = "Thanks for playing!";
            }, 2000);
        }
    }
});
