const { io } = require("../server")


io.on('connection', (client) => {
    console.log('Usuario Conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    // En caso el usuario se desconecte
    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)

        /* console.log(mensaje)

        if (mensaje.usuario) {
            callback({
                respuesta: 'Todo salió bien'
            })
        } else {
            callback({
                respuesta: 'Todo salió mal'
            })
        } */
    })

})