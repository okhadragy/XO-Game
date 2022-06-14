currentPlayer = "x"
xPlaces = []
oPlaces = []
p1Score = 0
tieScore = 0
p2Score = 0

function play(el) {
    if (currentPlayer == "x") {
        el.innerText = "X"
        xPlaces += el.id[el.id.length-1]
        if (checkDiagonals()||checkRows()||checkColumns()) {
            setTimeout(win,500)
        }else if(checkTie()){
            setTimeout(tie,500)
        }else{
            currentPlayer = "o"
            document.getElementById("p1").classList.remove("selected")
            document.getElementById("p1Score").classList.remove("selected")
            document.getElementById("p2").classList.add("selected")
            document.getElementById("p2Score").classList.add("selected")
            el.classList.add("unclick")
        }
        
    } else{
        el.innerText = "O"
        oPlaces += el.id[el.id.length-1]
        if (checkDiagonals()||checkRows()||checkColumns()) {
            setTimeout(win,500)
        }else if(checkTie()){
            setTimeout(tie,500)
        }else{
            currentPlayer = "x"
            document.getElementById("p2").classList.remove("selected")
            document.getElementById("p2Score").classList.remove("selected")
            document.getElementById("p1").classList.add("selected")
            document.getElementById("p1Score").classList.add("selected")
            el.classList.add("unclick")    
        }
    }
    
}

function checkDiagonals() {
    if (currentPlayer == "x") {
        checkX1 = ["1","5","9"].every(element => {
            return xPlaces.includes(element);
        });
        checkX2 = ["3","5","7"].every(element => {
            return xPlaces.includes(element);
        });
        if (checkX1||checkX2) {
            return true
        }else{
            return false
        }
    } else {
        checkO1 = ["1","5","9"].every(element => {
            return oPlaces.includes(element);
        });
        checkO2 = ["3","5","7"].every(element => {
            return oPlaces.includes(element);
        });
        if (checkO1||checkO2) {
            return true
        }else{
            return false
        }
    }    
}

function checkRows() {
    if (currentPlayer == "x") {
        checkX1 = ["1","2","3"].every(element => {
            return xPlaces.includes(element);
        });
        checkX2 = ["4","5","6"].every(element => {
            return xPlaces.includes(element);
        });
        checkX3 = ["7","8","9"].every(element => {
            return xPlaces.includes(element);
        });
        if (checkX1||checkX2||checkX3) {
            return true
        }else{
            return false
        }
    } else {
        checkO1 = ["1","2","3"].every(element => {
            return oPlaces.includes(element);
        });
        checkO2 = ["4","5","6"].every(element => {
            return oPlaces.includes(element);
        });
        checkO3 = ["7","8","9"].every(element => {
            return oPlaces.includes(element);
        });
        if (checkO1||checkO2||checkO3) {
            return true
        }else{
            return false
        }
    }
}

function checkColumns() {
    if (currentPlayer == "x") {
        checkX1 = ["1","4","7"].every(element => {
            return xPlaces.includes(element);
        });
        checkX2 = ["2","5","8"].every(element => {
            return xPlaces.includes(element);
        });
        checkX3 = ["3","6","9"].every(element => {
            return xPlaces.includes(element);
        });
        if (checkX1||checkX2||checkX3) {
            return true
        }else{
            return false
        }
    } else {
        checkO1 = ["1","4","7"].every(element => {
            return oPlaces.includes(element);
        });
        checkO2 = ["2","5","8"].every(element => {
            return oPlaces.includes(element);
        });
        checkO3 = ["3","6","9"].every(element => {
            return oPlaces.includes(element);
        });
        if (checkO1||checkO2||checkO3) {
            return true
        }else{
            return false
        }
    }
}

function win() {
    if (currentPlayer == "x") {
        p1Score++
        document.getElementById("p1Score").innerText = p1Score
        alert("Congrats Player1 you win the match")
    }else{
        p2Score++
        document.getElementById("p2Score").innerText = p2Score
        alert("Congrats Player2 you win the match")
    }
    askCon()
}

function reset() {
    complete()
    p1Score = 0
    tieScore = 0
    p2Score = 0
    document.getElementById("p1Score").innerText = p1Score
    document.getElementById("tieScore").innerText = tieScore 
    document.getElementById("p2Score").innerText = p2Score
}

function complete() {
    for (const el of document.getElementsByTagName("td")) {
        el.innerText = ""
        el.classList.remove("unclick")
    }
    xPlaces = []
    oPlaces = []
}

function checkTie() {
    if ((xPlaces.length==5 && oPlaces.length==4)||(xPlaces.length==4 && oPlaces.length==5)) {
        return true
    } else {
        return false
    }
}

function tie() {
    tieScore++
    document.getElementById("tieScore").innerText = tieScore
    alert("Tie")
    askCon()
}

function askCon(){
    cont = confirm("Do you want to continue?")
    if (cont==true) {
        complete()
    } else {
        reset()
    }
}