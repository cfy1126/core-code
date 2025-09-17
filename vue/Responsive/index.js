function defineReactive(data,key,value){
    if(arguments.length === 2){
        value = data[key];
    }
    console.log("defineReact属性",key);
    observe(value);
    Object.defineProperty(data,key,{
        get(){
            return value;
        },
        set(newValue){
            if(newValue === value){
                return 
            }
            value = newValue;
        }
    })
}

function def(data,key,value,enumerable){
    Object.defineProperty(data,key,{
        value,
        writable: true,
        configurable: true,
        enumerable
    })
}

class Observer{
    constructor(value){
        def(value,'__ob__',this,false);
    }
    walk(value){
        for(let key in value){
            defineReactive(value,key);
        }
    }
}

function observe(value){
    if(typeof value !== 'object'){
        return
    }
    let ob;
    if(typeof value.__ob__ !== 'undefined'){
        ob = value.__ob__;
    }else{
        ob = Observer(value);
    }
}

const obj = {
    a: {
        m: {
            n: 10
        }
    },
    b: 100
}

observe(obj);