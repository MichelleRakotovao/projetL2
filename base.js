const mysql =require('mysql');
const instance=null;
const connection=
    mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'stock_manage'
    })

    connection.connect((err)=>{
        if(err){
            console.log(err.message);
        }
        console.log('bd'+ connection.state);
    })

    class dbstock{
        static getdbstockInstance(){
            return instance? instance : new dbstock();
        }
       

        async insert(arti,pri,quan,cat){
            try{
                await new Promise((resolve,reject)=>{
                    const query="INSERT INTO articles(libelle,prix,quanti,idcategories) values(?,?,?,?)";
                    connection.query(query,[arti,pri,quan,cat],(err,result)=>{
                        if(err)reject(new Error(err.message));
                        resolve(result);
                    })
                })
                return {
                    arti:arti,
                    pri:pri,
                    quan:quan,
                    cat:cat
                };
            }
            catch{

            }
        }

        async getAllData(){
            try{
                const response = await new Promise((resolve,reject)=>{
                    const query = "SELECT * from articles";
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err,message));
                        resolve(result);
                    })
                })
                console.log(response);
                return response;
            }catch(error){
                console.log(error);
            }
        }
        async analyse(bvm,bmax,bmin,bjsc,stM,stS,bcat){
            try{
                await new Promise((resolve,reject)=>{
                    const query="update categories set vente_moyen=?,stock_max=?,stock_min=?,joursec=?,vente_moyen=?,stock_sec=? where idCategories=?";
                    connection.query(query,[bvm,bmax,bmin,bjsc,stM,stS,bcat],(err,result1)=>{
                        if(err)reject(new Error(err.message));
                        resolve(result1);
                    })
                })
                return{
                    bvm:bvm,
                    bmax:bmax,
                    bmin:bmin,
                    bjsc:bjsc,
                    stM:stM,
                    stS:stS,
                    bcat:bcat
                }
            }catch(error){
                console.log(error);
            }
        }
        async getAnalyse(){
            try{
                const response= await new Promise((resolve,reject)=>{
                    const query="select * from categories";
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(response);

            }catch(error){
                console.log(error);}
        }
        async total(){
            try{
                const res=await new Promise((resolve, reject) => {
                    const query="select sum(quanti) from articles "
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res);
                return res;
            }catch(error){
                console.log(error);
            }
        }

        async cat1(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=1"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }
        async cat(n){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories="+n
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat2(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=2"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat3(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=3"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat4(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=4"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat5(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=5"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat6(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=6"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async cat7(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(quanti) from articles where idCategories=7"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async stock(){
            try {
                const response=await new Promise((resolve, reject) => {
                    const query="select sum(vente_moyen) from categories"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(response);
                return response
            } catch (error) {
                console.log(error);
            }
        }
        
        async prix1(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=1"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix2(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=2"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix3(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=3"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix4(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=4"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix5(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=5"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix6(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=6"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }

        async prix7(){
            try {
            const res=await new Promise((resolve, reject) => {
                const query="select sum(prix*quanti) from articles where idCategories=7"
                connection.query(query,(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            })
            console.log(res)
            return res
            } catch (error) {
                console.log(error);
            }
            
        }
        async delete(){
            try {
                
            } catch (error) {
                console.log(error);
            }
        }

        async modifQuantite(nbr,libelle){
            try{
                await new Promise((resolve,reject)=>{
                    const query="update articles set quanti=quanti-? where libelle=?";
                    connection.query(query,[nbr,libelle],(err,result)=>{
                        if(err)reject (new Error(err.message));
                        resolve(result);
                    })
                })
                return{
                    nbr:nbr,
                    libelle:libelle
                }
            }
            catch(error){
                console.log(error);
            }
        }

        async moy1(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=1"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec1(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=1"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }
        
        
        async moy2(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=2"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec2(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=2"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }

        
        async moy3(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=3"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec3(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=3"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }

        
        async moy4(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=4"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec4(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=4"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }

        
        async moy5(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=5"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec5(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=5"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }

        
        async moy6(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=6"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec6(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=6"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }

        
        async moy7(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select vente_moyen from categories where idCategories=7"
                    connection.query(query,(err,result)=>{
                        if(err) reject (new Error(err.message));
                        resolve(result)
                    })
                })
                console.log(res);
                return res
            }catch(error){
                console.log(error);
            }
        }
        async sec7(){
            try{
                const res=await new Promise((resolve,reject)=>{
                    const query="select stock_sec from categories where idCategories=7"
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result);
                    })
                })
                console.log(res)
                return res
            }
            catch(error){
                console.log(error);
            }
        }
    }
module.exports=dbstock;   