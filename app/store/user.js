export const estado = () => ({
    id:0,
    first_name:"",
    last_name:"",
    address:"",
    telephone:"",
    email:"",
    rol_id:1,
    username:"",
    password:"",
    created_at:""
})

export const mutations = {
    storeId:(estado,data) =>{
        estado.id = data
    },
    storeFName:(estado,data) =>{
        estado.first_name = data
    },
    storeLName:(estado,data) =>{
        estado.last_name = data
    },
    storeAddress:(estado,data) =>{
        estado.address = data
    },
    storeTelephone:(estado,data) =>{
        estado.telephone = data
    },
    storeEmail:(estado,data) =>{
        estado.email = data
    },
    storeRol_id:(estado,data) =>{
        estado.rol_id = data
    },
    storeUsername:(estado,data) =>{
        estado.username = data
    },
    storePassword:(estado,data) =>{
        estado.password = data
    },
    storeDate:(estado,data) =>{
        estado.created_at = data
    },
}


