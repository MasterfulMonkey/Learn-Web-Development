let customNameInput = document.getElementById('customName');
let randomize = document.getElementById('randomize');
let storyContent = document.getElementById('story');

let usRadio = document.getElementById('us');
let ukRadio = document.getElementById('uk');

let currentStory: Story;

function randomValueFromArray<T>(array: T[]): T
{
    return array[Math.floor(Math.random()*array.length)];
}

function getRandomInteger(min: number, max: number): number
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max - min + 1)) + min;
}

class Story
{
    private names: string[] = [
        "Willy the Goblin",
        "Big Daddy",
        "Father Christmas"
    ];
    private name: string;

    private locations: string[] = [
        "the soup kitchen",
        "Disneyland",
        "the White House"
    ];
    private location: string;

    private actions: string[] = [
        "spontaneously combusted",
        "melted into a puddle on the sidewalk",
        "turned into a slug and crawled away"
    ];
    private action: string;

    private temperature: string;
    private weight: string;

        private usTemp: string;
        private usWeight: string;

        private ukTemp: string;
        private ukWeight: string;

    public constructor(private customName: string = "Bob")
    {
        this.randomizeStory();
    }

    private randomizeStory(): void
    {
        this.name = randomValueFromArray(this.names);
        this.location = randomValueFromArray(this.locations);
        this.action = randomValueFromArray(this.actions);

        let tempT: number = getRandomInteger(80, 100);
        let tempW: number = getRandomInteger(250, 400);

            this.usTemp = `${tempT.toString()} degrees Fahrenheit`;
            this.usWeight = `${tempW.toString()} pounds`;

            this.ukTemp = `${((tempT - 32) * 5/9).toFixed()} degrees Celcius`;
            this.ukWeight = `${(tempW/14).toFixed()} stone`;
    }

    private setSystem(isUK: boolean): void
    {
        if(isUK)
        {
            this.temperature = this.ukTemp;
            this.weight = this.ukWeight;
        }
        else
        {
            this.temperature = this.usTemp;
            this.weight = this.usWeight;
        }
    }

    public getStory(isUK: boolean): string
    {
        this.setSystem(isUK);

        return `It was ${this.temperature} outside, so ${this.name} went for a walk. When they got to ${this.location}, they stared in horror for a 
            few moments, then ${this.action}. ${this.customName} saw the whole thing, but wasn't surprised — ${this.name} weighed ${this.weight}, and it was a hot day.`;
    }
}

function newStory() // creates new Story object (with a custom name if present, else "Bob") and calls getStory (with UK flag if present) to get story text
{
    currentStory = new Story( (customNameInput.value!="") ? customNameInput.value : undefined );

    storyContent.textContent = currentStory.getStory(document.getElementById('uk').checked);
    storyContent.style.visibility = 'visible';
}

function convertSystem()
{
    storyContent.textContent = currentStory.getStory(document.getElementById('uk').checked);
}

randomize.addEventListener('click', newStory);

customNameInput.addEventListener('keydown', () => {
    if(event.key=="Enter")
        newStory();
})

usRadio.addEventListener('click', convertSystem);
ukRadio.addEventListener('click', convertSystem);