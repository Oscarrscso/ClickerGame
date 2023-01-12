// Amount of wavv
var waavVal = 0;
// Waav per click
let waavPC = 1;
// Waav per second
let waavPS = 0

// unlucky bud


// Add waav per click/crit
const waavBTN = () => {
    waavVal += waavPC;
    document.getElementById("waav").innerHTML = `waav: ${waavVal}`
    // critical hit chance and reward
    let critical = Math.floor(Math.random() * 350)
    if (critical === 1){
        waavVal += (waavPC*50)
        let crit = document.getElementById("critical")
        document.getElementById("critical").innerHTML = `Critical Hit! +${waavPC*50} waav!`
        crit.classList.add("is-active")
        let int = setTimeout(count, 2000)
        function count () 
{
        crit.classList.remove("is-active")
{
}
}
}
}





    

// Add 1 extra waav per click
const add1 = () => 
{
    
    let cost = document.getElementById("item1Cost").innerHTML;
    if (waavVal >= cost) 
{
        waavVal -= cost;
        let addVar = 1 //change!!!!!!!
        waavPC += addVar;
            document.getElementById("waav").innerHTML = `waav: ${waavVal}`
            
            document.getElementById("item1Cost").innerHTML = Math.floor(cost * 1.5);
            document.getElementById("clickAmount").innerHTML = `${waavPC} waav per click.`
            document.getElementById("clickAmount").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickAmount").style.scale = 1
            }
} 
    else
{
        let btn = document.getElementById("add1Click")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
    btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
}

// Add 10 extra waav per click
const add10 = () => 
{
    let cost = document.getElementById("item2Cost").innerHTML;
    if (waavVal >= cost) 
{
        waavVal -= cost;
        waavPC += 10;
            document.getElementById("waav").innerHTML = `waav: ${waavVal}`
            document.getElementById("item2Cost").innerHTML = Math.floor(cost * 1.5);
            document.getElementById("clickAmount").innerHTML = `${waavPC} waav per click.`
            document.getElementById("clickAmount").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickAmount").style.scale = 1
            }
} 
    else
{
        let btn = document.getElementById("add10Click")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
    btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
}

// Add 100 extra waav per click
const add100 = () => 
{
    let cost = document.getElementById("item4Cost").innerHTML;
    if (waavVal >= cost) 
{
        waavVal -= cost;
        waavPC += 100;
            document.getElementById("waav").innerHTML = `waav: ${waavVal}`
            document.getElementById("item4Cost").innerHTML = Math.floor(cost * 1.5);
            document.getElementById("clickAmount").innerHTML = `${waavPC} waav per click.`
            document.getElementById("clickAmount").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickAmount").style.scale = 1
            }
} 
    else
{
        let btn = document.getElementById("add100Click")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
         btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
}

// Add 500 extra waav per click
const add500 = () => 
{
    let cost = document.getElementById("item6Cost").innerHTML;
    if (waavVal >= cost) 
{
        waavVal -= cost;
        waavPC += 500;
            document.getElementById("waav").innerHTML = `waav: ${waavVal}`
            document.getElementById("item6Cost").innerHTML = Math.floor(cost * 1.5);
            document.getElementById("clickAmount").innerHTML = `${waavPC} waav per click.`
            document.getElementById("clickAmount").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickAmount").style.scale = 1
            }
} 
    else
{
        let btn = document.getElementById("add500Click")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
         btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
}

// Add 1 waav per second
const onePS = () =>
{
  let cost = document.getElementById("item3Cost").innerHTML 
        if (waavVal >= cost)
{
    waavVal -= cost
    document.getElementById("clickPS").style.visibility = "visible"
    document.getElementById("clickPS").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickPS").style.scale = 1
            }
    setInterval(counter, 1000)
    function counter()
{
    waavVal+=1
        document.getElementById("waav").innerHTML = `waav: ${waavVal}`
        
} 
    waavPS+=1
    document.getElementById("clickPS").innerHTML =`${waavPS} waav per second.`
    document.getElementById("item3Cost").innerHTML = Math.floor(cost * 1.5);
} 
    else
{
        let btn = document.getElementById("onePS")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
    btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
} 

// Add 10 waav per second
const tenPS = () =>
{
  let cost = document.getElementById("item5Cost").innerHTML 
        if (waavVal >= cost)
{
    waavVal -= cost
    document.getElementById("clickPS").style.visibility = "visible"
    document.getElementById("clickPS").style.scale = 1.04
            let int = setTimeout(count, 200)
            function count (){
                document.getElementById("clickPS").style.scale = 1
            }
    setInterval(counter, 1000)
    function counter()
{
    waavVal+=10
        document.getElementById("waav").innerHTML = `waav: ${waavVal}`
        
} 
    waavPS+=10
    document.getElementById("clickPS").innerHTML =`${waavPS} waav per second.`
    document.getElementById("item5Cost").innerHTML = Math.floor(cost * 1.5);
} 
    else
{
        let btn = document.getElementById("tenPS")
            btn.style.background = 'firebrick'
        let int = setInterval(count, 200)
            function count () 
{
    btn.style.background = "rgb(31, 31, 31)"
                if (count)
{
                clearInterval(int)
}
}
}
} 

