var socket = io()

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor')
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Alonso',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta del servidor:', resp)
})

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
})