import User from './User'
function Tableau ({titre}){
    //format
    const utilisateurs = [
        // {nom : "So", prenom : "Yero"},
        // {nom : "Faye", prenom : "Mery"}
        //ajouter les id manuellement pour eviter l'utilisation des index par defaut
        {id : 1, nom : "So", prenom : "Yero"},
        {id : 2, nom : "Faye", prenom : "Mery"}
    ]
    return (
    <div >
        <h1>Tableau {titre}</h1>
        {
            // utilisateurs.map(({nom,prenom}, index) => (<User key={index} nom = {nom} prenom = {prenom}/>))
            utilisateurs.map(({id,nom,prenom}) => (<User key={id} nom = {nom} prenom = {prenom}/>))

        }
    </div>
    );
    }
    export default Tableau