import { useState, useEffect } from 'react';
import { Row, Col, Button, Select, Tabs, Table } from 'antd';
import { getUser, delUser, editUser } from '@/services/user';

const { TabPane } = Tabs;
const { Option } = Select;
const del = (id)=>{
    delUser({id: id})
}
const verify = (id)=>{
    return editUser({id: id, status: 1})
}

export default function List() {
    const [list, setList] = useState([]);
    const columns = [
        {
          title: '用户名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
          render: (text)=>(
            <Select defaultValue={text}>
                <Option value={0}>管理员</Option>
                <Option value={1}>销售</Option>
                <Option value={2}>客户</Option>
            </Select>
          )
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (text)=>(
            <span>{text==0?"未审核":"已审核"}</span>
          )
        },
        {
            title: '操作',
            dataIndex: 'Id',
            key: 'Id',
            render: (text, record) => [
                <Button size="small" type="primary">修改</Button>,
                <Button 
                size="small" 
                type="primary" 
                danger 
                onClick={()=>{del(text)}}>删除</Button>,
                <Button size="small" type="ghost"
                onClick={()=>{
                    verify(record.Id).then((res)=>{
                        let l = [];
                        for (let [index, elem] of list.entries()) {
                            if(res.Id == elem.Id){
                                l.push(res)
                            }else{
                                l.push(elem)
                            }
                        }
                        setList(l);
                    })
                }}
                >审核</Button>,
            ]
        },
    ];
    useEffect(()=>{
        getUser().then(res=>{
            setList(res)
        })
    }, [])
    return (
        <Row style={{backgroundColor: '#fff'}}>
            <Col span={24}>
                <Tabs type="card" defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                    <Table dataSource={list} columns={columns} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    );
}
