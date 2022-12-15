import React from 'react'   
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    orders: [],
    currentItems: [],
    items: [
      {
       id: 1,
       title: 'armcheaLux',
       img: 'armchea.jpg',
       desc: 'Описание бла-бла',
       category: 'chairs',
       price: '5000'
      },
      {
        id: 2,
       title: 'SofaLux',
       img: 'sofa4.jpg',
       desc: 'Описание бла-бла',
       category: 'sofa',
       price: '7000'
      },
      {id: 3,
        title: 'Sofafox',
        img: 'sofa5.jpg',
        desc: 'Описание бла-бла',
        category: 'sofa',
        price: '9000'
      },
      {
        id: 4,
        title: 'Simpldimpl',
        img: 'simpldimpl.jpg',
        desc: 'Описание бла-бла',
        category: 'bed',
        price: '500'
      },
      {
        id: 5,
        title: 'SectorClear',
        img: 'SectorClear.jpg',
        desc: 'Описание бла-бла',
        category: 'bed',
        price: '29000'
      },
      {
        id: 6,
       title: 'KosMos',
       img: 'chea.png',
       desc: 'Описание бла-бла',
       category: 'armchairs',
       price: '55000'
      }

    ],
    ShowFullItem: false,
    fullItem: {}

  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this) /* вкл метод добавить в корзину */
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)  
  this.onShowItem = this.onShowItem.bind(this)



}





render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      
      {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      
      <Footer />
      
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})

  }

  chooseCategory(category) {
    if(category === 'all' ) {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category) })

  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true

    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })

  }
}

export default App;
