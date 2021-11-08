<?php
declare (strict_types = 1);

namespace app\middleware;
use app\v0\controller\Tool;

class Auth
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        // $info = request()->header();
        // $token = $info['authorization'];
        // $token = token::getToken();
        // $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9leGFtcGxlLm9yZyIsImF1ZCI6Imh0dHA6XC9cL2V4YW1wbGUuY29tIiwiaWF0IjoxMzU2OTk5NTI0LCJuYmYiOjEzNTcwMDAwMDAsImRhdGEiOnsidWlkIjoiMTIzIiwibmFtZSI6ImNjIn19.ozt7s5j_R_wmtC60qYr7J-rEvl7OSP9ybXBLpga7h3U';
        // print_r(Tool::getData($token));
        return $next($request);
    }
}
