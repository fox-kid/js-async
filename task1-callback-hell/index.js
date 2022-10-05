// Callback hell example

function makePancakes() {
    setTimeout(function() {
        console.log("Buy ingredients");
        
        setTimeout(function() {
            console.log("Prepare equipment for mixing batter and frying");
            
            setTimeout(function() {
                console.log("Mix your dry and wet ingredients and whisk in a bowl");

                setTimeout(function() {
                    console.log("Preheat the pan and add oil");

                    setTimeout(function() {
                        console.log("Pour batter on a pan");

                        setTimeout(function() {
                            console.log("Remove a pancake from the pan");
                        }, 1000 * 60 * 10) // Remove in ten minutes
                    }, 5000) // Five seconds to pour in shapes
                }, 1000 * 60 * 5) // Five minutes to preheat the pan
            }, 1000 * 60 * 10)
        }, 1000 * 60 * 2)
    }, 1000 * 60 * 30)
}

makePancakes();