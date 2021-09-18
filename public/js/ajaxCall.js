var exportedParam;
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
})


class exported {

    #sync;
    #cache;
    #processData;
    #url;
    #fn;
    #method;
    #data;

    constructor(url,sync,cache,processData,fn,method,data)
    {
       this.#sync        = sync;
       this.#cache       = cache;
       this.#processData = processData;
       this.#url = url;
       this.#fn = fn;
       this.#method = method;
       this.#data;
    }

    setup() {
        $.ajaxSetup({
            headers: {
                'X-CRSF-TOKEN': $('meta[name="csrf-token"]').prop('content')
            }
        })
    }

    setVariables(json) 
    {
        this.data = json;
        return this;
    }

    async(async)
    {
        if (typeof async == Boolean) throw 'Not valid input need a boolean value';
        this.async = async;
        return this;
    }

    go(url)
    {
        this.url = url;
        return this;
    }

    action(method,fn)
    {
        this.method = method;
        this.fn = fn;
        return this;

    }

    config(prop) 
    {
       this.url = 'hell';
       return this[prop];
    }

    call() 
    {
       $.ajax({
           url: this.url,
           type: this.method,
           data: this.data,
           processData: this.processData,
           sync: this.sync
       }).then((x) => {
        this.fn(x);
       })
       return this;
    }
}

class fetch extends exported    
{
    constructor(sync,chace,processData,url) 
    {
        super(sync,chace,processData,url)
        this.data;
        this.url = url;
    }

    setVaribles(json = {}) 
    {
       this.data = json;
       return this;
    }

    process() {

    }

    onSuccess(fn) 
    {
      
    }

    settings() 
    {

    }

}

let ajax = new fetch;

export default ajax;
