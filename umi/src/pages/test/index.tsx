import { useEffect, useState } from 'react';
import Forms from '@/components/form';
import { history, connect } from 'umi';

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
        console.log(form)
    }, [form])
    return (
        <div>
            <Forms {...props} data={data} />
        </div>
    )
}
export default connect(({ test }) => ({ ...test }))(Role);