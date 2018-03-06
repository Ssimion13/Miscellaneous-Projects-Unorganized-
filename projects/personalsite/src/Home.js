import React, {Component} from "react";
import Square from "./Square";
import Questions from "./Questions";
import axios from 'axios';


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: [],
      categoryID: [],
      clues: {},
      loading: true
    }
  }
  componentWillMount(){
      const getRandomNumber = Math.floor(Math.random() * 100);
      console.log(getRandomNumber);
      const getRandomCategories = "http://jservice.io/api/categories?count=6&offset=" + getRandomNumber;
          axios.get(getRandomCategories).then(response=>{
            const getCategoryIDs = response.data.map(x => {
              return x.id
            })
            const categoryIds   = getCategoryIDs;
            const categoryClues = {};

            // arr Promises[]
            const categoryPromises = categoryIds.map(id => {
                let yourvar = `http://jservice.io/api/clues?category=${id}`;

                return axios
                    .get(yourvar)
                    .then(({data}) => {
                        return {
                            categoryID : id,
                            clues : data
                        }
                    });
            });

            Promise
                .all(categoryPromises)
                .then(data => {
                    data.map(d => {
                        categoryClues[d.categoryID] = d.clues
                    });

                    this.setState({
                        categories : response.data,
                        categoryID : categoryIds,
                        clues      : categoryClues,
                        loading    : false
                    })
                    
                });
          })
            
    
      }

   render(){
    const state = this.state;
    if(this.state.loading === false){
      console.log(state.clues);
    }
    const mappedCategories = state.categories.map(x => {
      return <Square key = {x.id} id = {x.id} value={x.title.toUpperCase()} />
    })
    const valueArray = [200, 400, 600, 800, 1000];
    const mappedClues = state.categories
    .map(c => {
        return state.clues[c.id].map(clue => {
            return <Square value={clue.value} key={clue.id} />
        });
    })
    .reduce((total, current) => {
        return total.concat(current);
    }, []);

  return (
    <div className = "home">
       <div className = "Categories">
       {mappedCategories }
      </div>


      <div className = "Clues">
       {mappedClues}
      </div>

      < Questions />
       
    </div>
  )
}
}

export default Home;
