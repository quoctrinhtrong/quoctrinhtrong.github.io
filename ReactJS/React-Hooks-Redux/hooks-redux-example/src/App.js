import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { toggleOpenShop } from './store/action';
import ProductList from './components/ProductList';
import ProductListHooks from './components/ProductListHooks';

const App = (props) => {
  const { isOpen, toggleOpenShop } = props;
  return (
    <div className="App">
      <div>
        <h1>{isOpen ? 'OPEN' : 'CLOSE'}</h1>
        <button onClick={toggleOpenShop}>{isOpen ? 'open' : 'close'}</button>
      </div>
      <ProductList />
      <ProductListHooks />
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
  }
}

const mapDispatchToProps = {
  toggleOpenShop,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
