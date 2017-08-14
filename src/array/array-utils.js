function clear(array = []) {
    try{
        array.length = 0;
        return array;
    }catch(error){
        if (!Array.isArray(array)) {
            throw new TypeError('argument is not an array');
        }
    }
}

function first(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('argument is not an array');
    }
    return array[0] || null;
}

function deleteIf(array, condition = () => undefined) {
    if (!Array.isArray(array)) {
        throw new TypeError('argument is not an array');
    }
    if(array.length === 0) return array;

    for(let i = 0 ; i < array.length ;){
        if(condition(array[i])){
            array.splice(i, 1)
        }else {
            i++;
        }
    }
    return array;
}

export {
    clear,
    first,
    deleteIf
};
