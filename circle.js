//Computes the basic informations of a circle given it's radius

//declaring a global constant
const PI = Math.PI;

function compute(){
    // getting the value of form when button is clicked
    var radius = document.getElementById("radius").value;

    //before discovering this regexp I had come up with a way to check if the field contained number but it didn't really worked
    //I would first parseInt(radius) which would either return a number object or a NaN object, and then would use isNaN()
    //But it didn't fully work because of for inputs like "1hello", it would take the 1 where I would want it to reject the input

    //This is a regexp that checks that the field only contains numbers !
    if (!(/^\d+$/.test(radius))){
        window.alert("The entered radius is not a number. Try again.");
    } else {

        const circle = { //creating a circle objects
            circumference: 2 * radius * PI,
            area: (radius ** 2) * PI, //using exponents
            volume: (radius ** 3) * PI
        }

        //using `` to have better variable encapsulating
        document.getElementById("circum").innerHTML = 
        `The circumference of your circle is: ${Math.round(circle.circumference)}cm (rounded value)`;

        document.getElementById("area").innerHTML = 
        `The area of your circle is: ${Math.round(circle.area)}cm squared (rounded value)`;

        document.getElementById("vol").innerHTML = 
        `The volume of your circle is: ${Math.round(circle.volume)}cm cubed (rounded value)`;
    }

}