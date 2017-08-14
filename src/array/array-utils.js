function clear(array = []){
    try{
        array.length = 0;
        return array;
    }catch(error){
        if (!Array.isArray(array)) {
            throw new TypeError('argument is not an array');
        }
    }
}

function first(array){
    if (!Array.isArray(array)) {
        throw new TypeError('argument is not an array');
    }
    return array[0] || null;
}

export {
    clear,
    first
};
