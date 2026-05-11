import './StatReseau.css';
function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((acc, ligne) => acc + ligne.arrets, 0);
  const ligneMax = lignes.reduce((max, ligne) => 
    ligne.arrets > max.arrets ? ligne : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <span className="stat-chiffre">{totalLignes}</span>
        <span className="stat-libelle">Lignes</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">{totalArrets}</span>
        <span className="stat-libelle">Arrêts au total</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">Ligne {ligneMax.numero}</span>
        <span className="stat-libelle">Plus d'arrêts ({ligneMax.arrets})</span>
      </div>
    </div>
  );
}
export default StatReseau;