console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button = document.querySelector("#location")
console.log(button)

// Select the empty p tag under the button
let tag = document.querySelector("#locationText")
console.log(tag)


// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button.addEventListener("click",function(event){
tag.textContent=" 1300 Boynton Ave is moving soon!"
})

// Task 2: Our Values section
// Select the h3 with S under "Our Values"
let h3= document.querySelector("#score1")
console.log(h3)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
h3.addEventListener("click",function(event){
h3.textContent="Self-Awareness"
})


// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this


// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"



// Task 3: Uniform section
// Select the joggers image


// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp



// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp



// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)



// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)



