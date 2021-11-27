import React, { Component } from 'react';
import { Link } from 'umi';
import { Breadcrumb } from 'antd';
import routes from '../../../config/routes';

const getPath = (key, menu) => {
    let path = []
    if (!key) return path;
    function getObj(obj) {
        if (!obj) return false
        let arr = obj.map((item) => {
            let p = getObj(item.routes)
            if (item.path == key || p) {
                if (!item.flatMenu) {
                    path.unshift(item)
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        })
        return arr.find((val) => { return val == true })
    }
    getObj(menu)
    console.log(path)
    return path
}
export default class Bread extends Component {
    constructor(props) {
        super(props);
        let parent = this.props.parent
        this.state = {
            routes: routes,
            path: parent.location.pathname,
            paths: []
        }
    }
    shouldComponentUpdate(props) {
        let path = props.parent.location.pathname
        if (this.state.path !== path) {
            this.setState({ path })
            return true
        } else {
            return false
        }
    }
    breadList = (key) => {
        let route = getPath(key, this.state.routes);
        console.log(route)
        return route.map((item, index) => {
            // console.log(item)
            return (<Breadcrumb.Item key={index}><a href={item.path}>{item.name}</a></Breadcrumb.Item>)
        })
    }
    render() {
        return <Breadcrumb>{this.breadList(this.state.path)}</Breadcrumb>;
    }
}