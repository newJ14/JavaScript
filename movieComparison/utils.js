const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        // console.log(args)
        if(timeoutId){
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};

