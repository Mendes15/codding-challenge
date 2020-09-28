import React from 'react'

class Movies extends React.Component {
    // je veuxx récuperer plusieurs les donnes qui sont dans API, je les stockent dans un tableau
        constructor(props){
            super(props)
            this.state = {
                key:[]
                
            };
    
        }
        // Pour avoir accès l'API
        componentDidMount(){
            fetch("movies.json")
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
            {this.state.key.map((movies, i) =>{
                return (
                    <article key={i}>
                        <img src={movies.imageFilm} alt ="flyer"/>
                        <h3 > {movies.nomFilm}</h3>
                        <p>{movies.catégorieFilm}</p>
                    </article>
                )
            }
            )}
            </div>

        )
    }
}

export default Movies