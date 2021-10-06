import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout';
import QuanLyUser from './admin/QuanLyUser';
import DonHang from './admin/DonHang';
import QuanLiProduct from './admin/QuanLiProduct';
import QuanLiDanhMuc from './admin/QuanLiDanhMuc';
import AddProduct from './admin/Add';
import AddDanhMuc from './admin/AddDanhMuc';
import EditProduct from './admin/Edit'
import EditDanhMuc from './admin/EditDanhMuc'


class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
    


                    <Route exact path={['/admin*']} render={() => (
                        localStorage.getItem("accessToken") ?
                            <AdminLayout {...this.props}>
                                <Switch>
                                    <Route exact path="/admin/product/:sp">
                                        <QuanLiProduct {...this.props} />
                                    </Route>                               
                                    <Route exact path={`/admin/product/:sp/add`}>
                                        <AddProduct />
                                    </Route>                                   
                                </Switch>
                            </AdminLayout>
                            :
                            <AdminLayout {...this.props}>
                            </AdminLayout>
                    )}>
                    </Route>

        
                </Switch>
            </BrowserRouter >
        );
    }
}


export default Router;