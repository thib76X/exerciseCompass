import React from 'react';
import {CssBaseline} from '@material-ui/core';
import MainLayout from './components/layouts/MainLayout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Filter from './components/filter/Filter';
import DrawerFilter from './components/drawer/DrawerFilter';
import FakeDialog from './components/dialog/FakeDialog';
import Showcase from './components/showcase/Showcase';
import DrawerCart from './components/drawer/DrawerCart';


function App() {
  return (
      <React.Fragment>
        <CssBaseline/>
        <DrawerFilter/>
        <DrawerCart/>
        <FakeDialog/>
        <MainLayout
            header={<Header titleH={'SportMarket'}/>}
            filter={<Filter/>}
            footer={<Footer adressA={'somewhere'}/>}
            show={<Showcase/>}
        />
      </React.Fragment>
  );
}

export default App;
