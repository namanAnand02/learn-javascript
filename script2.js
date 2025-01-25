const quotesList = [
    "Dream big, work hard, stay focused.",
    "Believe in yourself and keep going.",
    "Small steps lead to big success.",
    "Courage is the key to progress.",
    "Embrace change to unlock your potential.",
    "The future belongs to the curious.",
    "Every day is a new beginning.",
    "Find joy in the little things.",
    "Patience and persistence conquer all challenges.",
    "Kindness is free, spread it everywhere.",
    "You are stronger than you think.",
    "Success comes to those who persevere.",
    "Gratitude transforms ordinary into extraordinary moments.",
    "Action turns dreams into tangible reality.",
    "Failure is just another learning opportunity.",
    "Happiness blooms from within your heart.",
    "Keep moving forward despite the obstacles.",
    "Learn, adapt, grow, and keep evolving.",
    "Focus on progress, not on perfection.",
    "Confidence is built step by step."
]




// this will generate a new quote on every click around anywher eon the document. 
// document.addEventListener("click", ()=>{
    // const quote = document.getElementById("quote")

    // const index = Math.floor(Math.random()* quotesList.length)
    // quote.textContent = quotesList[index]
// })


// -----> we want them to generate new quote only on button click, we'll add eventListener on button then 

const button = document.querySelector("button")
button.addEventListener("click", ()=>{
    const quote = document.getElementById("quote")

    const index = Math.floor(Math.random()* quotesList.length)
    quote.textContent = quotesList[index]
})




//-------->  few other events are : click, dblclick, keydown, mouseover, mousemove


// const button = document.querySelector("button")
// button.addEventListener("dblclick", ()=>{
//     const quote = document.getElementById("quote")

//     const index = Math.floor(Math.random()* quotesList.length)
//     quote.textContent = quotesList[index]
// })


// const button = document.querySelector("button")
// button.addEventListener("mousemove", ()=>{
//     const quote = document.getElementById("quote")

//     const index = Math.floor(Math.random()* quotesList.length)
//     quote.textContent = quotesList[index]
// })


// ******** EVENT OBJ ************

// eventListener gives us event object which has all the info about any event occurring

// event, event.type , event.target, event.key, event.clientX, event.clientY



// document.addEventListener("keydown", (event)=>{

//     console.log(event);
//     console.log(event.key);
    
    
//     if (event.key === "Enter"){
//         const quote = document.getElementById("quote")

//         const index = Math.floor(Math.random()* quotesList.length)
//         quote.textContent = quotesList[index]
//     }
    

// })




// const button = document.querySelector("button")
// button.addEventListener("click", (event)=>{
//     console.log(event.clientX);   // 228
//     console.log(event.clientY);  // 358
//     console.log(event.type);    // click
//     console.log(event.target); // HTML button element 
    
    
//     const quote = document.getElementById("quote")

//     const index = Math.floor(Math.random()* quotesList.length)
//     quote.textContent = quotesList[index]
// })

