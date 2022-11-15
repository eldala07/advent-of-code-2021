// PART 1

// example input
const exampleInput = [
    {forward: 5},
    {down: 5},
    {forward: 8},
    {up: 3},
    {down: 8},
    {forward: 2}
];

// real input
const realInput = [{forward: 8},{down: 9},{forward: 2},{down: 1},{forward: 9},{forward: 7},{forward: 5},{up: 3},{up: 3},{down: 5},{forward: 2},{down: 8},{down: 3},{forward: 6},{down: 2},{down: 4},{down: 7},{down: 7},{forward: 2},{down: 6},{down: 8},{down: 2},{down: 8},{up: 9},{down: 8},{forward: 8},{down: 5},{up: 4},{forward: 4},{forward: 4},{forward: 3},{down: 9},{forward: 8},{up: 3},{forward: 2},{forward: 3},{forward: 6},{down: 7},{down: 2},{forward: 4},{forward: 7},{forward: 6},{up: 5},{up: 1},{forward: 4},{down: 9},{up: 6},{forward: 6},{up: 9},{forward: 1},{down: 9},{forward: 4},{down: 3},{forward: 7},{forward: 5},{down: 1},{up: 9},{down: 9},{forward: 6},{forward: 1},{down: 5},{down: 6},{forward: 6},{forward: 3},{up: 4},{up: 9},{down: 3},{forward: 6},{up: 4},{up: 6},{forward: 4},{down: 1},{down: 2},{up: 9},{forward: 8},{down: 2},{down: 3},{down: 4},{up: 3},{forward: 3},{forward: 4},{down: 4},{forward: 7},{forward: 9},{down: 7},{forward: 6},{forward: 2},{up: 6},{forward: 7},{forward: 9},{down: 5},{forward: 6},{up: 9},{forward: 6},{forward: 2},{forward: 6},{up: 3},{down: 1},{forward: 5},{down: 3},{forward: 7},{down: 4},{forward: 1},{forward: 7},{down: 1},{up: 2},{down: 7},{down: 6},{forward: 8},{forward: 2},{forward: 1},{forward: 9},{down: 3},{forward: 3},{down: 6},{up: 8},{up: 3},{forward: 1},{forward: 3},{forward: 7},{down: 9},{forward: 7},{forward: 3},{up: 6},{forward: 4},{down: 9},{forward: 2},{down: 4},{up: 2},{down: 1},{up: 1},{down: 6},{forward: 1},{up: 6},{up: 7},{forward: 3},{forward: 3},{forward: 2},{forward: 1},{down: 7},{forward: 9},{down: 5},{down: 9},{up: 9},{forward: 3},{forward: 8},{down: 3},{forward: 9},{forward: 4},{down: 3},{up: 4},{up: 8},{up: 4},{down: 8},{down: 6},{down: 5},{forward: 2},{up: 6},{up: 1},{up: 9},{down: 4},{up: 8},{forward: 6},{down: 1},{forward: 7},{up: 2},{forward: 6},{up: 2},{down: 6},{down: 5},{forward: 2},{down: 2},{down: 1},{forward: 8},{forward: 1},{up: 9},{forward: 3},{down: 6},{forward: 2},{forward: 8},{down: 3},{forward: 3},{forward: 4},{forward: 7},{forward: 2},{up: 4},{forward: 8},{forward: 1},{forward: 9},{down: 3},{down: 1},{forward: 8},{down: 5},{down: 3},{forward: 5},{down: 7},{down: 1},{forward: 8},{forward: 2},{forward: 4},{forward: 8},{forward: 6},{down: 1},{forward: 5},{forward: 9},{forward: 9},{up: 9},{forward: 9},{forward: 4},{down: 5},{down: 2},{down: 3},{forward: 8},{forward: 9},{up: 8},{up: 1},{up: 6},{forward: 7},{up: 9},{forward: 2},{forward: 6},{up: 6},{forward: 3},{up: 4},{forward: 1},{down: 4},{up: 6},{down: 5},{forward: 7},{forward: 6},{down: 3},{down: 4},{forward: 3},{down: 6},{down: 1},{forward: 5},{forward: 7},{up: 8},{forward: 4},{up: 7},{down: 4},{forward: 3},{down: 7},{forward: 7},{forward: 4},{forward: 1},{forward: 8},{up: 5},{up: 6},{forward: 5},{forward: 3},{down: 6},{forward: 8},{forward: 2},{forward: 7},{down: 7},{down: 8},{down: 3},{up: 3},{down: 1},{down: 1},{forward: 6},{forward: 9},{forward: 4},{forward: 9},{forward: 6},{down: 1},{forward: 9},{down: 6},{down: 8},{up: 5},{down: 8},{forward: 4},{forward: 2},{up: 6},{down: 9},{forward: 6},{down: 9},{down: 6},{down: 6},{forward: 2},{up: 8},{down: 7},{down: 2},{forward: 2},{forward: 2},{down: 1},{up: 8},{down: 5},{forward: 9},{forward: 5},{forward: 8},{forward: 8},{forward: 1},{down: 2},{down: 7},{up: 5},{forward: 9},{forward: 4},{forward: 4},{forward: 6},{down: 7},{up: 5},{forward: 5},{up: 9},{down: 7},{down: 4},{down: 9},{forward: 7},{up: 4},{down: 1},{down: 6},{up: 2},{up: 6},{down: 2},{forward: 9},{down: 3},{forward: 3},{forward: 4},{forward: 1},{up: 2},{forward: 6},{down: 3},{forward: 2},{down: 9},{forward: 8},{forward: 3},{forward: 2},{up: 5},{forward: 3},{forward: 1},{down: 8},{up: 2},{up: 4},{up: 5},{down: 3},{down: 6},{down: 1},{forward: 4},{up: 3},{down: 1},{down: 4},{up: 6},{forward: 8},{down: 5},{down: 7},{down: 7},{forward: 9},{forward: 9},{down: 2},{up: 2},{down: 5},{forward: 5},{forward: 4},{down: 7},{forward: 4},{down: 2},{forward: 2},{forward: 4},{up: 8},{down: 8},{up: 4},{forward: 2},{forward: 2},{up: 8},{forward: 2},{down: 3},{down: 7},{down: 9},{up: 6},{up: 3},{forward: 2},{forward: 3},{up: 8},{forward: 6},{up: 8},{up: 1},{down: 6},{down: 8},{up: 9},{down: 1},{up: 8},{forward: 9},{forward: 4},{forward: 9},{forward: 8},{forward: 1},{down: 6},{down: 7},{up: 5},{down: 1},{forward: 9},{down: 9},{forward: 7},{down: 5},{forward: 7},{down: 1},{down: 4},{down: 4},{forward: 6},{forward: 1},{up: 4},{up: 2},{forward: 7},{down: 6},{down: 2},{down: 3},{up: 7},{up: 1},{down: 6},{down: 6},{down: 8},{down: 8},{forward: 5},{forward: 1},{forward: 5},{up: 8},{forward: 8},{up: 8},{forward: 1},{down: 9},{forward: 1},{up: 7},{up: 3},{down: 1},{down: 9},{up: 2},{down: 3},{down: 2},{forward: 9},{up: 9},{up: 1},{up: 5},{forward: 8},{down: 3},{down: 7},{forward: 7},{down: 8},{down: 5},{down: 5},{down: 4},{down: 7},{forward: 6},{forward: 6},{forward: 4},{forward: 6},{forward: 3},{up: 5},{forward: 2},{down: 7},{forward: 1},{down: 4},{down: 7},{down: 7},{forward: 4},{down: 2},{up: 4},{forward: 2},{up: 2},{up: 3},{down: 5},{forward: 3},{down: 2},{forward: 5},{down: 2},{down: 1},{up: 4},{up: 5},{up: 9},{forward: 1},{forward: 9},{down: 9},{up: 8},{forward: 9},{forward: 7},{down: 9},{down: 2},{down: 9},{forward: 9},{forward: 7},{up: 7},{forward: 6},{up: 6},{forward: 5},{forward: 6},{down: 4},{forward: 8},{forward: 5},{forward: 2},{up: 4},{down: 4},{forward: 1},{down: 2},{up: 9},{up: 7},{up: 2},{up: 3},{down: 9},{forward: 4},{up: 6},{forward: 5},{forward: 5},{forward: 9},{forward: 1},{down: 6},{forward: 8},{down: 5},{up: 3},{up: 1},{down: 2},{up: 4},{down: 1},{down: 9},{forward: 8},{down: 2},{forward: 7},{down: 7},{up: 5},{down: 7},{down: 3},{forward: 2},{forward: 2},{forward: 4},{down: 9},{down: 6},{down: 9},{forward: 6},{down: 6},{down: 9},{forward: 1},{down: 1},{forward: 8},{down: 4},{up: 6},{down: 2},{forward: 9},{down: 3},{up: 3},{down: 2},{up: 2},{up: 5},{down: 8},{forward: 1},{forward: 3},{down: 8},{up: 3},{up: 3},{up: 3},{forward: 2},{up: 3},{down: 4},{down: 1},{down: 7},{forward: 3},{down: 3},{down: 8},{down: 9},{forward: 9},{forward: 3},{up: 4},{forward: 8},{forward: 8},{up: 7},{up: 3},{forward: 6},{down: 9},{up: 1},{forward: 2},{down: 6},{up: 6},{forward: 2},{down: 6},{down: 3},{up: 7},{forward: 6},{down: 6},{down: 1},{down: 5},{forward: 6},{up: 2},{down: 2},{down: 3},{down: 1},{up: 9},{forward: 6},{up: 2},{forward: 2},{down: 6},{up: 3},{up: 4},{forward: 8},{up: 8},{up: 4},{down: 7},{down: 4},{up: 9},{forward: 9},{up: 6},{forward: 5},{forward: 7},{forward: 2},{forward: 8},{down: 7},{down: 5},{down: 4},{up: 3},{forward: 7},{down: 2},{forward: 5},{forward: 9},{forward: 4},{forward: 7},{forward: 8},{up: 6},{down: 1},{forward: 3},{forward: 9},{forward: 1},{down: 8},{down: 1},{down: 3},{down: 1},{down: 1},{up: 3},{down: 5},{up: 1},{down: 8},{down: 2},{down: 8},{down: 3},{forward: 2},{forward: 8},{forward: 4},{down: 8},{down: 6},{forward: 8},{down: 7},{forward: 8},{forward: 2},{forward: 6},{forward: 6},{forward: 4},{up: 2},{forward: 3},{up: 8},{forward: 7},{forward: 4},{down: 8},{down: 3},{down: 4},{up: 8},{forward: 5},{forward: 3},{up: 4},{up: 2},{down: 6},{forward: 4},{up: 8},{up: 3},{up: 8},{down: 3},{up: 1},{forward: 2},{down: 4},{down: 4},{down: 9},{down: 5},{forward: 9},{up: 6},{up: 5},{down: 8},{down: 6},{down: 7},{forward: 8},{forward: 4},{up: 4},{forward: 1},{down: 4},{up: 4},{down: 9},{up: 6},{down: 9},{up: 3},{forward: 4},{down: 1},{down: 5},{down: 5},{up: 1},{down: 8},{down: 9},{down: 1},{forward: 4},{down: 8},{down: 6},{down: 1},{forward: 2},{down: 5},{up: 1},{up: 1},{down: 1},{down: 3},{down: 3},{down: 8},{down: 6},{down: 5},{down: 3},{up: 3},{forward: 5},{down: 7},{down: 7},{forward: 2},{forward: 6},{forward: 1},{down: 8},{forward: 2},{up: 2},{forward: 2},{down: 2},{forward: 7},{down: 7},{down: 9},{up: 2},{up: 2},{down: 3},{forward: 1},{down: 1},{forward: 5},{forward: 4},{down: 4},{forward: 6},{forward: 2},{forward: 7},{forward: 2},{forward: 8},{down: 4},{up: 3},{down: 3},{up: 9},{down: 7},{up: 8},{down: 1},{down: 8},{up: 9},{down: 6},{up: 5},{up: 8},{down: 2},{down: 3},{forward: 1},{down: 5},{down: 5},{forward: 8},{down: 9},{forward: 7},{forward: 8},{down: 1},{down: 2},{up: 8},{down: 2},{up: 5},{down: 3},{forward: 5},{forward: 6},{up: 4},{up: 3},{forward: 5},{forward: 1},{down: 2},{forward: 2},{down: 9},{up: 7},{down: 2},{up: 8},{forward: 2},{forward: 2},{up: 4},{forward: 5},{down: 4},{up: 6},{up: 8},{forward: 9},{up: 1},{forward: 9},{forward: 7},{forward: 3},{forward: 1},{down: 1},{forward: 5},{forward: 2},{forward: 6},{forward: 6},{forward: 3},{forward: 7},{up: 7},{down: 6},{down: 2},{up: 5},{down: 5},{up: 2},{forward: 7},{forward: 2},{down: 9},{up: 4},{down: 5},{down: 3},{forward: 7},{down: 2},{forward: 9},{forward: 6},{down: 3},{down: 3},{forward: 6},{down: 9},{forward: 7},{up: 5},{up: 6},{down: 3},{up: 4},{forward: 4},{up: 3},{down: 8},{down: 9},{down: 9},{down: 4},{up: 1},{up: 2},{down: 3},{forward: 4},{forward: 5},{down: 1},{up: 3},{down: 8},{down: 7},{forward: 2},{up: 4},{down: 8},{forward: 1},{forward: 6},{up: 8},{down: 2},{down: 6},{forward: 5},{up: 8},{forward: 7},{down: 9},{forward: 9},{down: 3},{forward: 9},{forward: 1},{forward: 6},{up: 7},{forward: 1},{down: 5},{down: 8},{down: 3},{forward: 5},{forward: 6},{down: 7},{forward: 4},{down: 6},{forward: 4},{up: 4},{down: 4},{forward: 4},{down: 9},{forward: 3},{down: 6},{forward: 3},{down: 3},{up: 3},{forward: 3},{down: 4},{down: 4},{down: 4},{down: 5},{forward: 5},{down: 9},{down: 7},{down: 1},{forward: 5},{forward: 3},{forward: 8},{down: 5},{forward: 4},{forward: 3},{down: 8},{forward: 1},{forward: 1},{down: 6},{forward: 4},{down: 5},{forward: 8},{down: 7},{forward: 6},{down: 7},{up: 2},{forward: 6},{down: 7},{down: 3},{down: 6},{up: 2},{forward: 8},{forward: 5},{down: 6},{forward: 5},{up: 7},{forward: 8},{down: 1},{forward: 2},{up: 7},{down: 4},{up: 5},{forward: 5},{forward: 4},{forward: 3},{down: 1},{forward: 8},{up: 9},{down: 2},{up: 4},{forward: 7},{up: 6},{forward: 3},{down: 8},{forward: 4},{down: 2},{down: 9},{forward: 8},{down: 5},{forward: 3},{down: 9},{up: 1},{forward: 6},{up: 9},{down: 7},{forward: 5},{forward: 3},{down: 8},{down: 6},{up: 3},{down: 5},{forward: 7},{up: 2},{forward: 4},{up: 1},{down: 8},{down: 7},{forward: 3},{forward: 1},{down: 3},{down: 8},{forward: 7},{up: 2},{down: 7},{up: 6},{down: 7},{down: 1},{down: 3},{up: 6},{forward: 2},{down: 5},{forward: 1},{forward: 7},{forward: 2},{down: 8},{down: 8},{down: 7},{forward: 7},{forward: 5},{forward: 1},{forward: 7},{forward: 3},{down: 2},{up: 8},{up: 4},{up: 6},{down: 2},{down: 1},{down: 5},{down: 3},{forward: 2},{up: 1},{forward: 8},{up: 8},{forward: 7},{up: 1},{down: 7},{forward: 7},{forward: 5},{forward: 3},{up: 4},{down: 5},{down: 5},{forward: 3},{forward: 9},{down: 9},{up: 6},{up: 7},{down: 7},{forward: 7}];

// utility functions
const computeDepthAndXPosition = (input) => {
    const [depth, xPosition] = input.reduce((acc, current) => {
        const key = Object.keys(current)[0];
        const value = 0 + Object.values(current)[0];
        switch(key) {
            case "down":
                acc[0] += value;
                return acc;
            case "up":
                acc[0] -= value;
                return acc;
            case "forward":
                acc[1] += value;
                return acc;
            default:
                return acc; 
        };
    }, [0, 0]);
    return [depth, xPosition];
};

const multiplication = (depth, xPosition) => depth * xPosition;

// results
const [exampleDepth, exampleXPosition] = computeDepthAndXPosition(exampleInput);
console.log("Example depth and xPosition: ", exampleDepth + " - " + exampleXPosition);
console.log("Example multiplication result: ", multiplication(exampleDepth, exampleXPosition));

const [realDepth, realXPosition] = computeDepthAndXPosition(realInput);
console.log("Real depth and xPosition: ", realDepth + " - " + realXPosition);
console.log("Real multiplication result: ", multiplication(realDepth, realXPosition));


// PART 2

// inputs: same as before

// utility functions
const computeDepthAndXPositionAndAim = (input) => {
    const [depth, xPosition, aim] = input.reduce((acc, current) => {
        const key = Object.keys(current)[0];
        const value = 0 + Object.values(current)[0];
        switch(key) {
            case "down":
                acc[2] += value;
                return acc;
            case "up":
                acc[2] -= value;
                return acc;
            case "forward":
                acc[0] += acc[2] * value;
                acc[1] += value;
                return acc;
            default:
                return acc; 
        };
    }, [0, 0, 0]);
    return [depth, xPosition, aim];
};

// results
const [exampleDepth2, exampleXPosition2] = computeDepthAndXPositionAndAim(exampleInput);
console.log("Example2 depth and xPosition: ", exampleDepth2 + " - " + exampleXPosition2);
console.log("Example2 multiplication result: ", multiplication(exampleDepth2, exampleXPosition2));

const [realDepth2, realXPosition2] = computeDepthAndXPositionAndAim(realInput);
console.log("Real2 depth and xPosition: ", realDepth2 + " - " + realXPosition2);
console.log("Real2 multiplication result: ", multiplication(realDepth2, realXPosition2));