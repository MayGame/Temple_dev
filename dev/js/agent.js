class SuperAgent{

}
class Agent{//simplify to neurons when possible
    static _s_build_iface(
        c,
        text_getter,
        text_setter,
        c_to_proxy,
        rest_params
    ){
        let setter = new Function('o','k','v',text_setter)
        let getter = new Function('o','k',text_getter)
        let handler = {
            set:setter,
            get:getter
        }
        return new Proxy(c[c_to_proxy],handler)
    }
    build_iface(
        text_getter,
        text_setter,
        c_to_proxy,
        cname='c',
        rest_params
    ){
        var c=this.interfaces[cname];
        let setter =(new Function('o','k','v',text_setter)).bind(c)

        // let getter = new Function('o','k',text_getter)
        let getter = new Function('o','k',text_getter).bind(c)
        let handler = {
            set:setter,
            get:getter
        }
        return new Proxy(c[c_to_proxy],handler)// c - same as context, iface beneath
    }
    
constructor(params){
    //#region 
    params=params||{}
    this.name=params.name||'anon';
    this.meta={
        about:''
    }
    this.actions=params.actions||{}
    this.knowledge_base=params.knowledge_base||params.global_c||params.g||{
    }
    this.context=params.context||{

    }
    // this.global_c=params.global_c||{}
    //#endregion
    this.context['_']={}
    this.context.self=this.context
    this.context._.c=this.context
    this.context._.g=this.knowledge_base
    this.context._.agent_unsafe_root=this;
    this.memory=params.memory||{}
    this.interfaces={//proxy context
        c:this.context,
        e:console.log(this.context),
        // i:console.log(this.interfaces),
    }
    this.interfaces.cb_proxy=this.build_iface(`let getter; console.log(this._); return 'c'; `,`let setter; o,k,v`,'self'),
    // this.interfaces.two_proxy=Agent._s_build_iface(this.interfaces.c,`let getter;return  2;`,`let setter;o;k;v;`,'c',''),
    this.interfaces.one=this.build_iface(`console.log('one',k);return this[k];`,'','self','c')//inner
    this.interfaces.two=this.build_iface(`console.log('two',k);return this[k];`,'','self','one')//outer
    // this.interfaces.two_proxy=this.build_iface(`let getter;return  2;`,`let setter;o;k;v;`,'one'),
   if(params.init_interfaces)
    { Object.entries(params.init_interfaces).forEach(iface => {
        let k = iface[0];
        let v = iface[1];
        console.log("iface creating",k,v);
        this.interfaces[k]=this.build_iface(...v)
    });
}
    this.channels={
        log:e=>console.log(this.name+"'s log:",e),

    }
    if(this.actions.oncreate){
    this.actions.oncreate(this)
}
else{
    console.log('Agent created: ',this.name)
}
}

// a_b_resolve(a,b,cname);
// a_b_resolve_async(a,b,cname);
// kb_sync;//
// add_channel(text){

// }
// 

}
console.log("agent imported")
