// Define story elements
const characters = ['Bob', 'Alice', 'The unicorn', 'The dinosaur'];
const actions = ['danced', 'sang', 'ate', 'flew'];
const objects = ['pizza', 'cake', 'guitar', 'magic wand'];

// Function to generate a random silly story
function generateStory() {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    const story = `${character} ${action} with a ${object}.`;

    document.getElementById('story').textContent = story;
}

// Event listener for the "Generate Story" button
document.getElementById('generate-btn').addEventListener('click', generateStory);

// Initial story generation
generateStory();
