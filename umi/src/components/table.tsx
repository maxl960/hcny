import React, { Component, useEffect } from 'react';
import { Table } from 'antd';

function TableComp(props: object) {
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    useEffect(() => {
        // console.log(props)
    })
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}
export default TableComp
