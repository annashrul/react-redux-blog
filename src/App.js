import React, { Component } from 'react';
import List from './List';
import Add from './Add';

//****** CONTAINER COMPONENT ******\\

export default class App extends Component {
  
  state = {
    kontak : [
      {name : 'Dedi Rahmat', age : 56, id: 1, status : 'Kepala Keluarga'},
      {name : 'Yeni Sudartini', age : 51, id: 2, status: 'Istri'}
    ],
  };
	
	addKontak = (kontak) => {
	  kontak.id   = Math.random();
    const list  = [...this.state.kontak,kontak];
    this.setState({
      kontak : list
    })
  };
	
	deleteKontak = (id) => {
    let kontak = this.state.kontak.filter(obj => {
      return obj.id !== id;
    });
    this.setState({
      kontak : kontak
    });
  };
	
	editKontak = (id) => {
	  console.log(id);
  };
  
  render() {
    return (
      <div className="App container">
        <h3 className="center blue-text">Profile Keluarga Bpk Dedi Rahmat</h3>
        <Add addKontakProps={this.addKontak}/>
        <List
          kontakProps       = {this.state.kontak}
          deleteKontakProps = {this.deleteKontak}
          editKontakProps   = {this.editKontak}
        />
      </div>
    );
  }
}


