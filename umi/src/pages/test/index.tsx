import { useEffect, useState } from 'react';
import Forms from '@/components/form';
import { Form, Table } from '@/components/';
import { history, connect, useModel } from 'umi';

const Role = (props) => {
    // const { dispatch, form } = props;
    const [form, setForm] = useState();
    const data = {
        list: [
            {
                name: 'username',
                label: '用户名'
            },
            {
                name: 'pwd',
                label: '密码',
                type: 'password'
            }
        ],
        submit: function (values) {
            // if (dispatch) dispatch({
            //     type: 'test/setForm',
            //     payload: values
            // })
            setForm(values)
        }
    }
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>
            <Form {...props} data={data} />
            <Table />
        </div>
    )
}
export default connect(({ test }) => ({ ...test }))(Role);