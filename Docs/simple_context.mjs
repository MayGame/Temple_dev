/**
 * use cases: 
 * 1. Simple entry access: get value of guid: global[id]
 * 2. Quadruple, to be used with proxy maps. Way to access - context.map_name[id]
 * Example: Context.A_Map[B] -> get the value of A(B) (for A-relation)
 * 
 */
 var simple_base_context={
    //a(b) is c. value of c can //b isn't a relation.it's an id

    b_map:{a:'c'},//isn't stored like this, builds in runtime
    d_map:{a},
}
global_c={//one of global contexts.
    quadruples:['abc_id','daabe_id'],
    // relations:[],//not needed. if there'san entry in maps - it is a relation
    maps:{b:'b_map',d:'d_map',h:'h_map'},
    // h_map:[],//h:d(a(a(_key_)))   h relation can be learned by following d(a(a())) route.
    //that's just one case of neuron instances/channels/fabs with a special parser

    c:['','c'],//
    abc_id:['b','a','c'],//id 'c' can be resolved as b(a) 
    daabe_id:[],//d(a(a(b))) is e
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

/**
 * so,daabe. e:d(a(a(b_id)))
 * quadruples:[],
 * a_map:[b_id:'ab_id',ab_id:'aab_id']
 * d_map:[aab_id:'e']
 */

//#region 
/**
 * E2:A(C), where C is A(B):
* 1. pipe <- _resolveWord_ AC_id:
*  here, AC_id is a followin  
*  if(maps[c] exists) -> assuming it
* 2. pipe <- 
*/

g2={
    AC_id:[]
}
c2={_g:g2,
maps:{},

}


//#endregion 