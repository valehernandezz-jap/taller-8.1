const DATA_URL = 'json/data.json'

const container = document.getElementById('container')

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<li>${item.name} ${item.lastname} | ${item.age} años</li>`
  }
}

// Solicitud fetch al archivo JSON con los datos
fetch(DATA_URL)
  .then((res) => res.json())  // Convierto la respuesta a formato JSON
  .then(({ course, students, teacherName}) => {   // Desestructuro el objeto JSON para obtener los datos necesarios
    document.getElementById('title').innerHTML = `Estudiantes del curso de <span>${course}</span>`  // Actualizo el título con el nombre del curso
    document.getElementById('subtitle').innerHTML = `Docente: <span>${teacherName}</span>`          // Actualiza el subtítulo con el nombre del docente

    showData(students)  // Llamo a la función showData() para mostrar la lista de estudiantes
  })
