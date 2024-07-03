// Verificar si hay datos guardados en LocalStorage al cargar la página
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
let contador = localStorage.getItem('contador') ? parseInt(localStorage.getItem('contador')) : 0;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('citaForm');
    const tableBody = document.querySelector('#appointmentTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener valores del formulario
        const petName = document.getElementById('petName').value;
        const ownerName = document.getElementById('ownerName').value;
        const datetime = document.getElementById('datetime').value;

        // Incrementar el contador y generar el ID automático
        contador++;
        const id = contador.toString(); // Convertir a cadena si es necesario

        // Crear objeto de cita
        const appointment = {
            id: id,
            petName: petName,
            ownerName: ownerName,
            datetime: datetime
        };

        // Agregar cita al array
        appointments.push(appointment);

        // Guardar datos en LocalStorage
        localStorage.setItem('appointments', JSON.stringify(appointments));
        localStorage.setItem('contador', contador);

        // Mostrar mensaje de éxito
        alert(`La cita se agregó con éxito:\n\nID: ${appointment.id}\nNombre de la Mascota: ${appointment.petName}\nNombre del Dueño: ${appointment.ownerName}\nFecha y Hora: ${appointment.datetime}`);

        // Limpiar el formulario después de enviar
        form.reset();

        // Actualizar la tabla de citas
        renderAppointments();
    });

    // Función para renderizar las citas en la tabla
    function renderAppointments() {
        // Limpiar contenido previo de la tabla
        tableBody.innerHTML = '';

        // Recorrer el array de citas y agregarlas a la tabla
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];

            // Crear una nueva fila <tr>
            const row = document.createElement('tr');

            // Construir el contenido de la fila con las celdas <td>
            row.innerHTML = `
                <td>${appointment.id}</td>
                <td>${appointment.petName}</td>
                <td>${appointment.ownerName}</td>
                <td>${appointment.datetime}</td>
            `;

            // Agregar la fila a la tabla
            tableBody.appendChild(row);
        }
    }

    // Evento click para el botón de actualizar tabla
    updateTableBtn.addEventListener('click', function() {
        renderAppointments(); // Llamar a la función para renderizar las citas
    });

    // Llamar a la función para renderizar las citas al cargar la página
    renderAppointments();
});
