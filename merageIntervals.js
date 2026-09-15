const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

function merge(intervals) {

    if (intervals.length <= 1) {
        return intervals;
    }

    // Sort by start value
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log(intervals)
    let result = [intervals[0]];


    for (let i = 1; i < intervals.length; i++) {
        
        let current = intervals[i];
        let previous = result[result.length - 1];

        // Overlapping
        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {

            // Not overlapping
            result.push(current);
        }

    }

    return result;
}

console.log(merge(intervals));