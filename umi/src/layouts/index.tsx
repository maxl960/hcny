import Framework from './mgmt';
import Baseframe from './base';
import Login from '@/pages/user/[method]';

export default function (props) {
    const { route, routes, children } = props
    if (props.location.pathname === '/login') {
        return (<Baseframe>
            <Login {...props} />
        </Baseframe>)
    } else {
        return (
            <Framework
                {...props}
            ></Framework>
        )
    }

}