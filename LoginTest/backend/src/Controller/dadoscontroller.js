const dadosservice = require("../Service/dadosservice");

module.exports ={
    BuscarUsers: async (req, res)=>{
        try {
            const Users = await dadosservice.BuscarUsers();
            const result = Users.map(({Id, Email, Senha}) => ({Id, Email, Senha}));
        } catch(error){
            console.log(`[ERRO]: ${error.message}`);
        };
    }
};