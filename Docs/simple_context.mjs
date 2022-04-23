/**
 * use cases: 
 * 1. Simple entry access: get value of guid: global[id]
 * 2. Quadruple, to be used with proxy maps. Way to access - context.map_name[id]
 * Example: Context.A_Map[B] -> get the value of A(B)
 */
 var simple_base_context={
    //a(b) is c. value of c can 

    b_map:{a:'c'},//isn't stored like this, builds in runtime

}
global_c={//one of global contexts.
    quadruples:['abc_id'],
    maps:{b:'b_map'},
    c:['','c'],
    abc_id:['b','a','c']//id 'c' can be resolved as b(a) 
}

//#region interface out
var obj=new Proxy();
var bich1;//2 way channel
bich1=new Proxy({},{
    get:getch1,//,'''
    set:setch1,
})
bich1.field1//
//#endregion