var agent_client_context = {}

function init(init_obj){
    let context=init_obj.c;
    let main_activation_channel

    let a={
        main_activation_channel:(who,what)=>{

        },

    };

    return a
}

function new_agent(){
    var c={}
    var __some_name={
        activate:function(c=c){}
    }
}

var ct1={//todo.. describe it
    _g:global_context1,
    neuron_instances_tuple_map:{
        // somename:[]
    },
    neuron_instances_f:{
        M1651099893264activateFbAsk_____:async function(aId,c){
            let a = ctxt.activations_[aId];
            //activation. [ni,ac]
            console.log('a: ',a);
            if(a){//fixme make generic with own context
                // let c = ctxt.activationsContext[a[1]]
            //    console.log('nif a0',ctxt.neuron_instances_f[a[0]],'c',c)
                ctxt.neuron_instances_f[a[0]](a[1])
                // ctxt.neuron_instances_f[a[0]](c)
            }
            else {
                let r = rid()
                ctxt.unsorted.ask_back_channel('M1651137773037sendMeRenderCtxt__'+r+aId)
                //reg callback:
                //retry()
                ctxt.activate_these_once_full_ctxt[r]=()=>ctxt.neuron_instances_f.M1651099893264activateFbAsk_____(aId)
            }
        },
    }
}
var global_context1={//here you can get direct value. Maps are used when you need a(b) relations (ct1)
//quadruples are needed for "a(b) is c" see docs
maps:{
    neuron_instances_tuple:'neuron_instances_tuple_map'
},
quadruples:['neuron_instance_qguid_1'],
neuron_instance_qguid_1:['neuron_instances_tuple','id22_entry'],//id22_entry is a value for neurons_instance_tuple relation 
id22_entry:['neuron_guid1','context_guid1']
// context_guid1:
}
var agent_funcs={
    activate:function(agent,neuron_instance_name){
        agent.c._g[neuron_instance_name];//global
        // agent.c.neuron_instances_tuple[neuron_instance_name]
    }
}

let client_agent=init({c:agent_client_context,});

client_agent.main_activation_channel('')
console.log(client_agent);

