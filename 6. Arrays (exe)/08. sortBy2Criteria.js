function sortBy2Criteria(arr) {
    arr.sort(twoCriteriaSort);
    return arr.join('\n');
    function twoCriteriaSort(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}
console.log(sortBy2Criteria(['alpha',
    'beta',
    'gamma'
]));