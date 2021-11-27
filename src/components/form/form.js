import React, {Component} from "react";
import './form.css';
import axios from "axios";


class Athelets extends Component {
    constructor(){
        super();
        this.state={
          athlete:'',
          age:'',
          country:'',
          year:'',
          date:'',
          sport:'',
          players: []
            
        }
    }

  componentDidMount() {
    this.getAthlete();
  }
  getAthlete = () => axios.get("http://localhost:3000/players").then(res => {
    console.log('res',res);
            this.setState({players: res.data},() => {
      console.log('players',this.state);
            });
})




deleteAthlete=(id)=>{
  // console.log('index',index)
  axios.delete(`http://localhost:3000/players/${id}`).then(res => {
    console.log('res',res);
    this.getAthlete();
});
}

addAthlete = () => {
  axios.post('http://localhost:3000/players', { athlete: this.state.athlete,
  age: this.state.age,
   country: this.state.country,
   year: this.state.year,
   date: this.state.date,
   sport: this.state.sport  
  }).then(res=> {
   console.log('res',res);
   this.setState({athlete:'',
    age:'',
    country:'',
    year:'',
    date:'',
    sport:''
   })
   this.getAthlete()
})
}

 editOption = (play) => {
  this.setState({athlete: play.athlete,age: play.age,country: play.country,year:play.year,date: play.date,sport:play.sport})
 }

 updateAthlete = (id) => {
  axios.put(`http://localhost:3000/players/${id}`,{athlete: this.state.athlete,
  age: this.state.age,
  country: this.state.country,
  year: this.state.year,
  date: this.state.date,
  sport: this.state.sport}).then(res => {
  console.log('res',res);
  this.setState({athlete:'',
  age:'',
  country:'',
  year:'',
  date:'',
  sport:''})
  this.getAthlete();
  
 });
 }
  
    render() {
      const {players} = this.state;
        return (<div>
          <input type="text" value={this.state.athlete} placeholder='Name' onChange= {(e) => this.setState({athlete: e.target.value})} /><br/>
          <input type="text" value={this.state.age} placeholder='Age' onChange= {(e) => this.setState({age: e.target.value})} /><br/>
          <input type="text" value={this.state.country} placeholder='Country' onChange= {(e) => this.setState({country: e.target.value})}/><br/>
          <input type="text" value={this.state.year} placeholder='Year' onChange= {(e) => this.setState({year: e.target.value})} /><br/>
          <input type="text" value={this.state.date} placeholder='Date' onChange= {(e) => this.setState({date: e.target.value})} /><br/>
          <input type="text" value={this.state.sport} placeholder='Sport' onChange= {(e) => this.setState({sport: e.target.value})} /><br/>
          <button onClick={this.addAthlete}>ADD</button>
          <table border="10px" cellPadding="10px">
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>COUNTRY</th>
              <th>YEAR</th>
              <th>DATE</th>
              <th>SPORT</th>
              <th>EDIT & DELETE</th>
              
            </tr>
          {
             players && players.length>0 && players.map((play,index)=> {
             return(
               <tr>
                 <td>{play.athlete}</td>
                 <td>{play.age}</td>
                 <td>{play.country}</td>
                 <td>{play.year}</td>
                 <td>{play.date}</td>
                 <td>{play.sport}</td>
                 <td><button id='buttonedit' onClick={()=>this.editOption(play)} >edit</button>
                 <button id='buttondelete' onClick={()=>this.deleteAthlete(play.id)}>delete</button>
                 </td>
                 <button onClick={()=>this.updateAthlete(play.id)}>update</button>
               </tr>
             )
             })
            }
            </table>
      </div>);
    }
  }
  
  
            
export default Athelets;