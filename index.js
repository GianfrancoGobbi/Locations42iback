require('./app')

.listen(process.env.PORT || 8081, () => {
    console.log("servidor escuchando en el puerto 3001")
})