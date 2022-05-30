function constructionCrew(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
        return worker;
    } else {
        return worker;
    }
}

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
console.log('--------------------------');
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});