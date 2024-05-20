const stories = [
    {
        title: "The Adventurous Girl",
        parts: [
            "Once upon a time in a faraway land, there was a small village nestled in a valley.",
            "In this village lived a young girl named Ella, who dreamed of adventure beyond the mountains.",
            "One day, a mysterious traveler arrived, bringing tales of distant places and grand quests.",
            "Ella decided to leave her village and follow the traveler, hoping to find her own adventure.",
            "They journeyed through enchanted forests and across vast deserts, facing many challenges.",
            "In the end, Ella discovered that the greatest adventure was not in the places she visited, but in the courage she found within herself."
        ]
    },
    {
        title: "The Magical Pebble",
        parts: [
            "In a quiet forest, there was a hidden pond known only to the animals who lived there.",
            "A curious little frog named Fred loved to explore the pond and its surroundings.",
            "One day, Fred found a shiny pebble at the bottom of the pond and showed it to his friends.",
            "The pebble turned out to be magical, granting wishes to those with pure hearts.",
            "Fred and his friends used the pebble to make their forest a happier place for all.",
            "They learned that true happiness comes from sharing and caring for each other."
        ]
    },
    {
        title: "The Wise Warrior",
        parts: [
            "High in the mountains, there was a monastery where monks trained in martial arts and wisdom.",
            "A young monk named Li wanted to be the greatest warrior, but he struggled with patience.",
            "His master told him that true strength comes from within and set him on a journey of self-discovery.",
            "Li traveled through villages, helping people and learning from their stories.",
            "He realized that wisdom and compassion were as important as physical strength.",
            "Returning to the monastery, Li was now ready to become a true warrior, wise and strong."
        ]
    }
];

let currentStory = 0;
let currentPart = 0;

const storySelect = document.getElementById('story-select');
const storyBox = document.getElementById('story');
const nextBtn = document.getElementById('next-btn');
const storyTitle = document.getElementById('story-title');

storySelect.addEventListener('change', () => {
    currentStory = storySelect.value;
    currentPart = 0;
    storyBox.innerHTML = '';
    storyTitle.textContent = stories[currentStory].title;
});

nextBtn.addEventListener('click', () => {
    if (currentPart < stories[currentStory].parts.length) {
        storyBox.innerHTML += `<p>${stories[currentStory].parts[currentPart]}</p>`;
        storyBox.scrollTop = storyBox.scrollHeight; // Scroll to the bottom
        currentPart++;
    } else {
        alert("The story has ended.");
    }
});
