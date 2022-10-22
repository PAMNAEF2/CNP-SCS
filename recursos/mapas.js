const map = new Map();

function verificar(guild){
    return map.has(guild)
}

function agregar(guild, string){
    map.set(guild, string)
}

function remover(guild){
    map.delete(guild)
}

function conseguir(guild){
    return map.get(guild)
}

module.exports = {
    verificar,
    agregar,
    remover,
    conseguir
}
