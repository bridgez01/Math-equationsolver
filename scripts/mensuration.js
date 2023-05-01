const cylinderForm = document.getElementById('cylinder')

const coneForm = document.getElementById('cone')


function areaOfCyl(e){
    e.preventDefault();
    const r = document.getElementById('r-cylinder').value
    const h = document.getElementById('h-cylinder').value
    const r2 = r ** 2
    const area = (Math.PI * r2 * h).toFixed(4)

    const div = document.createElement('div')
    const text = document.createTextNode(`Area of the cylinder = ${area}`)
    div.appendChild(text)
    document.getElementById('cylinder-answer').append(div)
}

const areaOfCone = e =>{
    e.preventDefault();
    const r = document.getElementById('r-cone').value
    const h = document.getElementById('l').value
    const r2 = r ** 2
    const area = (Math.PI * r2 * h * 0.3333).toFixed(4)

    const div = document.createElement('div')
    const text = document.createTextNode(`Area of the cone = ${area}`)
    div.appendChild(text)
    document.getElementById('coned').append(div)
}

cylinderForm.addEventListener('submit' , areaOfCyl)
coneForm.addEventListener('submit' , areaOfCone
)