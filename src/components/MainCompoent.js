
import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId) {
    this.setState({selectedDish: dishId})
}
  render(){
   const HomePage = () =>{
       return(
           <Home/>
       );
   }
  return (
    <div>
       <Header></Header>
     
       <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        {/* <Menu dishes ={this.state.dishes}
            onClick={(dishId) => this.onDishSelected(dishId)}></Menu>
        <DishDetail
                dish={this.state.dishes.filter((dish) =>dish.id === this.state.selectedDish )[0]}></DishDetail>  */}
        <Footer></Footer>
    </div>
  );
  }
}

export default Main;
