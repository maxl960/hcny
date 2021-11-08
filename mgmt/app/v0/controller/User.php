<?php
namespace app\v0\controller;

use \think\facade\Db;
use app\BaseController;
use app\v0\model\User as UserModel;
use app\v0\controller\Tool;

// use app\v0\controller\Request as req;
// use think\Request;

class User extends BaseController
{
    // protected $request;
    function __construct()
    {
        session_start();
    }
    function _destruct()
    {
        # code...
    }
    /* 
    * login
    * @method post regist
    */
    public function login()
    {
        $params = request()->param();
        // 查询
        $model = new UserModel;
        $opts = [
            'name' => $params['username'],
            'pwd'   =>  $params['password']
        ];
        $user = $model->where($opts)->column('id, name');
        // 修改
        if($user){
            $user = $user[0];
            $token = Tool::getToken($user);
            // $_SESSION['token'] = $token;//$user->id;
            $user['token'] = $token;
            // session('token', $token);
            // $data = $user;
            $data = Tool::getData($token);
            // $data = $this->request->token('__token__', 'sha1');
            // print_r(session('token'));
            
        }
        // print_r(request()->ip());
        return json($data)->code(200);
    }
    public function register()
    {
        // $token = session('token');
        echo $_SESSION['token'];
        // echo session('?token');
        // $params = request()->param();
        // $code = 200;
        // $user = new UserModel;
        // $isName = $user->isName($params['username']);
        // if(!$isName){
        //     $opts = [];
        //     $opts['name'] = $params['username'];
        //     $opts['pwd'] = $params['password'];
        //     $opts['type'] = $params['type'];
        //     $data = $this->getRequest($user, $opts);
        // }else{
        //     $data = ['msg'=> '用户名已存在'];
        //     $code = 404;
        // }
        // return json($data)->code($code);
    }
    public function repwd()
    {
        $params = request()->param();
        // 查询
        $model = new UserModel;
        $opts = [
            'name' => $params['username'],
            'pwd'   =>  $params['password']
        ];
        $user = $model->where($opts)->find();
        // 修改
        $user->pwd = '111111';
        $user->token = 'token';
        $user->save();
        return json($user)->code(200);
    }
    public function list()
    {
        $user = new UserModel;
        $params = request()->param();
        $code = 200;
        $data = $this->getRequest($user, []);
        return json($data);
    }
    public function del()
    {
        $user = new UserModel;
        $id = request()->param('id');
        $data = $this->getRequest($user, ["id"=>$id]);
        return json($data);
    }
    public function edit()
    {
        $user = new UserModel;
        $opts = request()->param();
        $data = $this->getRequest($user, $opts);
        return json($data);
    }
}