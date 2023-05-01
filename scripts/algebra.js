const simForm = document.getElementById('simultaenous')
const quadForm = document.getElementById('quadratic')
// creating the function for simultaneous equations ehich creates a new div and returns the answer
function simEquation(e) {
    e.preventDefault();
    const a = document.getElementById('a-sim').value
    const b = document.getElementById('b-sim').value
    const c = document.getElementById('c-sim').value
    const d = document.getElementById('d-sim').value
    const ee = document.getElementById('e-sim').value
    const f = document.getElementById('f-sim').value

    const db = d * b
    const dc = d * c
    const ae = a * ee
    const af = a * f
    const sub1 = db - ae
    const sub2 = dc - af
    const Y = (sub2 / sub1).toFixed(4)
    const ans7 = Y * b 
    const ans8 = c - ans7
    const X = (ans8/a).toFixed(4)
    const div = document.createElement('div')
    const answer = document.createTextNode( 
     `Y = ${Y} and X = ${X}`)
    
     if (!isNaN(X) && isNaN(Y)) {
            div.append(answer);
        document.getElementById('sim-answer').append(div);

        div.style.fontSize = '20px'

     } else {
         return alert('Invalid entry')
     }
    



}




function quadEquation(e) {
    e.preventDefault();
    function getX1() {
        
    
        const a = document.getElementById('a-quad').value
        const b = document.getElementById('b-quad').value
        const c = document.getElementById('c-quad').value


        const bsq = b ** 2
        const ac =  4*a*c
        const undsqrtSub = bsq - ac
        const sqrt = Math.sqrt(undsqrtSub)
        const negb = -1 * b
        const doneWT = negb - sqrt
        const X1 = (doneWT/(2*a)).toFixed(4)
        console.log(X1)
        const div = document.createElement('div')
        const answer = document.createTextNode( 
     ` X1 = ${X1} `)
        if (!isNaN(X1)) {
            div.append(answer);
            document.getElementById('quad-answer').append(div);

            div.style.fontSize = '20px'

        } else {
            return alert('invalid result')
        }
        

        function getX2 () {
            
        
            const a = document.getElementById('a-quad').value
            const b = document.getElementById('b-quad').value
            const c = document.getElementById('c-quad').value
            
            const bsq = b ** 2
            const ac =  4*a*c
            const undsqrtSub = bsq - ac
            const sqrt = Math.sqrt(undsqrtSub)
            const negb = -1 * b
            const doneWT = negb + sqrt
            const X2 = (doneWT/(2*a)).toFixed
            console.log(X2)
            const div = document.createElement('div')
            const answer = document.createTextNode( 
            ` X2 = ${X2} `)

            if  (!isNaN(X2))  {
                div.appendChild(answer);
                document.getElementById('quad-answer2').appendChild(div);
    
                div.style.fontSize = '20px' 
            } else{
                alert('Invalid result')
            }
            

        }

        getX2();

    }
    getX1();
    
}



// Event listener for form submission
simForm.addEventListener('submit' , simEquation);
quadForm.addEventListener('submit' , quadEquation);



