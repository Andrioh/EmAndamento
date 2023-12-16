const dadosservice = require("../Service/dadosservice");

module.exports ={
    BuscarUsers: async (req, res)=>{
        try {
            const Users = await dadosservice.BuscarUsers();
            const result = Users.map(({Id, Email, Password}) => ({Id, Email, Password}));
            res.json({error: null, result});
        } catch(error){
            console.log(`[ERRO]: ${error.message}`);
        };
    },

    AddUser: async (req, res)=>{
        try{
            const {Email, Password} = req.params;
            const User = await dadosservice.AddUser(Email, Password);
            res.json({error: null, result: User || {}});
        }catch(error){
            console.log(`[Error]: ${error.message}`)
        }
    },

    UserSearch: async (req, res) =>{
        try{
            const {Email, Password} = req.params;
            const User = await dadosservice.UserSearch(Email, Password);
            res.json({error: null, result: User || {}})
        }catch(error){
            console.log(`[Erro]: ${error.message}`)
        }
    }
};