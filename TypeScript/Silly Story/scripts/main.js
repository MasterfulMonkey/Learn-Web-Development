var customNameInput = document.getElementById('customName');
var randomize = document.getElementById('randomize');
var storyContent = document.getElementById('story');
var usRadio = document.getElementById('us');
var ukRadio = document.getElementById('uk');
var currentStory;
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Story = /** @class */ (function () {
    function Story(customName) {
        if (customName === void 0) { customName = "Bob"; }
        this.customName = customName;
        this.names = [
            "Willy the Goblin",
            "Big Daddy",
            "Father Christmas"
        ];
        this.locations = [
            "the soup kitchen",
            "Disneyland",
            "the White House"
        ];
        this.actions = [
            "spontaneously combusted",
            "melted into a puddle on the sidewalk",
            "turned into a slug and crawled away"
        ];
        this.randomizeStory();
    }
    Story.prototype.randomizeStory = function () {
        this.name = randomValueFromArray(this.names);
        this.location = randomValueFromArray(this.locations);
        this.action = randomValueFromArray(this.actions);
        var tempT = getRandomInteger(80, 100);
        var tempW = getRandomInteger(250, 400);
        this.usTemp = tempT.toString() + " degrees Fahrenheit";
        this.usWeight = tempW.toString() + " pounds";
        this.ukTemp = ((tempT - 32) * 5 / 9).toFixed() + " degrees Celcius";
        this.ukWeight = (tempW / 14).toFixed() + " stone";
    };
    Story.prototype.setSystem = function (isUK) {
        if (isUK) {
            this.temperature = this.ukTemp;
            this.weight = this.ukWeight;
        }
        else {
            this.temperature = this.usTemp;
            this.weight = this.usWeight;
        }
    };
    Story.prototype.getStory = function (isUK) {
        this.setSystem(isUK);
        return "It was " + this.temperature + " outside, so " + this.name + " went for a walk. When they got to " + this.location + ", they stared in horror for a \n            few moments, then " + this.action + ". " + this.customName + " saw the whole thing, but wasn't surprised \u2014 " + this.name + " weighed " + this.weight + ", and it was a hot day.";
    };
    return Story;
}());
function newStory() {
    currentStory = new Story((customNameInput.value != "") ? customNameInput.value : undefined);
    storyContent.textContent = currentStory.getStory(document.getElementById('uk').checked);
    storyContent.style.visibility = 'visible';
}
function convertSystem() {
    storyContent.textContent = currentStory.getStory(document.getElementById('uk').checked);
}
randomize.addEventListener('click', newStory);
customNameInput.addEventListener('keydown', function () {
    if (event.key == "Enter")
        newStory();
});
usRadio.addEventListener('click', convertSystem);
ukRadio.addEventListener('click', convertSystem);
