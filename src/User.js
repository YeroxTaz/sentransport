// function User ({id,nom, prenom}){
function User ({id,nom,prenom}) {   
return (
        <div>
            {id} {prenom} - {nom}
        </div>
    );
} 
export function Test(){
    return "test"
}
export default User