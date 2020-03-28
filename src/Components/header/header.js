import React from "react";
import './header.css';
import HeaderButton from "../header-button/header-button";
import {desktop, directories} from "../menu-bar-lists";

const Header=()=>{
    return(
        <div className="btn-group">
                <HeaderButton getData="Рабочий стол" getImageUrl={require('./../ImageResources/dashboard.png')} getList={desktop}/>
                <HeaderButton getData="Справочники" getImageUrl={require('./../ImageResources/catalog.png')} getList={directories}/>
                <HeaderButton getData="Закупки" getImageUrl={require('./../ImageResources/purchase.png')}/>
                <HeaderButton getData="Склад" getImageUrl={require('./../ImageResources/stock.png')}/>
                <HeaderButton getData="Продажи" getImageUrl={require('./../ImageResources/sale.png')}/>
                <HeaderButton getData="Розничная торговля" getImageUrl={require('./../ImageResources/retail.png')}/>
                <HeaderButton getData="Финансы" getImageUrl={require('./../ImageResources/finance.png')}/>
                <HeaderButton getData="Цены" getImageUrl={require('./../ImageResources/priceList.png')}/>
                <HeaderButton getData="Оборудование" getImageUrl={require('./../ImageResources/machinery.png')}/>
                <HeaderButton getData="Транспорт" getImageUrl={require('./../ImageResources/transport.png')}/>
                <HeaderButton getData="ВЭД" getImageUrl={require('./../ImageResources/customs.png')}/>
                <HeaderButton getData="Производство" getImageUrl={require('./../ImageResources/manufacturing.png')}/>
                <HeaderButton getData="WMS" getImageUrl={require('./../ImageResources/wms.png')}/>
                <HeaderButton getData="Чат" getImageUrl={require('./../ImageResources/chat.png')}/>
                <HeaderButton getData="Учётная запись" getImageUrl={require('./../ImageResources/lock.png')}/>
                <HeaderButton getData="Поиск" getImageUrl={require('./../ImageResources/search.png')}/>
                <HeaderButton getData="BI" getImageUrl={require('./../ImageResources/bi.png')}/>
        </div>
    )
};

export default Header;


