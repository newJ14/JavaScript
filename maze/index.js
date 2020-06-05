// World: Object that contains all of the different things in our matter top 
// Engine; Reads in the current state of the world from the world object, then calculates changes in positions of all the different shapes 
// Runner: Gets the engine and world to work together. Runs about 60 times per second
// Render: Whenever the engine processes an update, Render will take a look at all the different shapes and show them on the screen
// Body: A shape that we are displaying. Can be a circle, rectangle, oval, etc 

const {Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter;

const width = 600; 
const height = 600; 
const cells = 3;

const engine = Engine.create();
const { world } = engine;
//world is a snapshot of all the different shapes we have 

const render = Render.create({
    element: document.body,
    // adding new element to the body element after that 
    engine: engine,
    options: {
        width: width,
        height: height,
        // wireframes:false
    }
});

Render.run(render); 
Runner.run(Runner.create(), engine);

// const shape = Bodies.rectangle(200, 200, 50, 50, {
//      isStatic: true
// });
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))

//Walls 
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, {isStatic: true}),
    Bodies.rectangle(width / 2, height, width, 40, {isStatic: true}),
    Bodies.rectangle(0, height / 2, 40, height, {isStatic: true}),
    Bodies.rectangle(width, height / 2, 40, height, {isStatic: true}),
];

World.add(world, walls);

const grid = Array(cells)
    .fill(null)
    .map(() => Array(cells).fill(false));

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1))

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells)
const startColumn = Math.floor(Math.random() * cells)

const stepThroughCell = (row, column) => {
//  If I have visited the cell at [row, column], then return

// Mark this cell as being visited

// Assemble randomly-ordered list of neighbours

// For each neighbour

// See if that neighbour is out of bounds

// If we have visited that neighbour, continue to next neighbour 

// Remove a wall from either horizontals or verticals

// Visit that next cells 

};

stepThroughCell(startRow, startColumn);

// Random Shapes 
// for (let i = 0; i < 30; i ++){
//     if(Math.random() > 0.5){
//         World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
//     } else {
//         World.add(
//             world, 
//             Bodies.circle(Math.random() * width, Math.random() * height, 35, {
//                 render: {
//                     fillStyle: 'yellow'
//                 }
//             })
//         )
//     }
// }
