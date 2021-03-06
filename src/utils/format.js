const subjects=[
    "Artes",
    "Biologia",
    "Ciencias",
    "EducacaoFísica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
function getSubject(subjectNumber){
    const arrayPosition= +subjectNumber - 1
    return subjects[arrayPosition]
} 

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports ={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
    
}