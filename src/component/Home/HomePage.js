import React from 'react';
import './HomePage.css';


function HomePage() {
    return (
        <div className="Home">
            <h1>Front-end</h1>
            <p className="texte">
                Les termes « front-end » (frontal) et « back-end » (dorsal ou arrière-plan)
                servent à définir les interfaces des programmes et les services par rapport à
                l'utilisateur initial (l'utilisateur pouvant être une personne ou un programme).
                Les utilisateurs interagissent directement avec une application frontale. Une
                application ou un programme « back-end », en revanche, sert indirectement aux
                services frontaux, généralement parce qu'il se trouve plus près de la ressource
                requise ou qu'il a la capacité de communiquer avec elle. L'application
                d'arrière-plan peut interagir directement avec l'application frontale ou, plus
                fréquemment, être appelée par un programme intermédiaire qui assure la médiation
                entre les activités frontales et d'arrière-plan. Par exemple, l'interface de
                programmation de téléphonie (TAPI, Telephony Application Program Interface) est
                parfois désignée comme interface frontale des services de téléphonie. Les
                demandes TAPI d'un programme sont mappées par des programmes Microsoft de DLL
                TAPI, c'est-à-dire par un ensemble intermédiaire de programmes, vers un
                programme back-end ou un pilote qui envoie les requêtes plus précises au
                matériel téléphonique de l'ordinateur. Autre exemple : une application frontale
                peut être l'interface directe avec les utilisateurs et envoyer les demandes à un
                programme distant en arrière-plan situé sur un autre ordinateur pour obtenir les
                données requises ou exécuter le service demandé. Dans un modèle informatique
                client/serveur, le « front-end » est généralement un client et le « back-end »,
                un serveur.
            </p>
        </div>
    )
}

export default HomePage;