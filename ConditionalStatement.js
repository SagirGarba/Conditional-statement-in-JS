//I will write code about my Article in Conditional statement in JavaScript.
//This github repo contains the sample codes of an Article "CONDITIONAL STATEMENT IN JavaScript" written at ................ by https://sagirportfolio.netlify.app/

    //Logical Operators

                // Inequality Operators

                    // Equal to (==)
                    2 == 2          //True
                    3 == 4          //False

                    // Strictly equal to (===)
                    2 === 2         //True
                    2 === "2"       //False

                    //Not equal to (!=)
                    2 != 3          //True
                    2 != 2          //False

                    //Greater than (>)
                    3 > 2           //True
                    3 > 4           //False

                    //Greater than or equal to (>=)
                    5 >= 4           //True
                    5 >= 5          //True
                    5 <= 6          //False

                    //Less than (<)
                    5 < 7           //True
                    5 > 3           //False

                    //Less than or equal to (<=)
                    3 <= 5          //True
                    3 <= 3          //True
                    3 <= 2          //False

                //Logical Operators

                    //AND (&&) 
                    (2 == 2 && 3 > 2)        //True
                    (10 != 10 && 5 > 4)      //False
                    (5 != 6 && 3 == 2)      //False

                    //OR (||)
                    (2 == 2 || 3 > 2)       //True
                    (10 != 10 || 5 > 4)     //True
                    (6 === "6" || 7 < 5)    //False

    //IF-ELSE Conditional Statement

                //Simple IF Conditional Statement.
                    let b;

                    if(b >= 5){
                        alert("The value of b is greater  than or equal to 5");
                    }
                    alert("The value of b is less than 5");

                //Else Conditional Statement
                    let a;

                    if(a == 10){
                        alert("The value of a is equal to 10");
                    }
                    else{
                        alert("The value of a is not equal to 10");
                    };

                //IF-Else Conditional Statement
                    let c;

                    if(c === 10 && c === "10"){
                        alert("The value of is equal to 10 and a string");
                    }
                    else if(c === 10 && c !== "10"){
                        alert("The value of is c is equal to 10 and a number");
                    }
                    else{
                        alert("The value of c is not equal 10");
                    };

    //Ternary Operators
                    let d;

                    d == 10 ? alert("The value of d is equal to 10") : alert("The value of d is not equal to 10");

    //Switch-Case Conditional Statements
                    switch (lowerCase) {
                        case "a":
                            console.log("A");
                            break;
                        case "b":
                            console.log("B");
                            break;
                        case "c":
                            console.log("C");
                            break;
                        case "z":
                            console.log("Z");
                            break;
                    };


//Read the full article at .....
//by https://sagirportfolio.netlify.app/