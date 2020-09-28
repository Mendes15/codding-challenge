import React from 'react'

class Series extends React.Component {
    // je veuxx récuperer plusieurs les donnes qui sont dans API, je les stockent dans un tableau
        constructor(props){
            super(props)
            this.state = {
                key:[]
                
            };
    
        }
        // Pour avoir accès l'API
        componentDidMount(){
            fetch("series.json")
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                this.setState({key: data.data})
            })
    
        }
    // je affiche 
    render (){
        return (
            <div>
            {/* .map -> generer tout les nom  */}
            {this.state.key.map((series, i) =>{
                return (
                    <article key={i}>
                        <img src={series.image} alt ="flyer"/>
                        <h3 > {series.nom}</h3>
                        <p>{series.catégorie}</p>
                    </article>
                )
            }
            )}
            </div>

        )
    }
}
export default Series