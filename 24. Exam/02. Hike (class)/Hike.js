class SmartHike {
    constructor(username, goals, listOfHikes, resourses) {
        this.username = username;
        this.goals = goals;
        this.goals = {};
        this.listOfHikes = listOfHikes;
        this.listOfHikes = [];
        this.resourses = resourses;
        this.resourses = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak) == true) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);
        if (this.goals.hasOwnProperty(peak) == false) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resourses <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let neededResources = time * 10;
        if (this.resourses - neededResources < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resourses -= neededResources;
        let currectHike = { peak, time, difficultyLevel };
        this.listOfHikes.push(currectHike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        let newPower = time * 10;
        if (this.resourses + newPower >= 100) {
            this.resourses = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {

    }
}