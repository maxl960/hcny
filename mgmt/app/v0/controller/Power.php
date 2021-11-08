<?php
namespace app\v0\controller;
use app\BaseController;
use app\v0\model\Role;
use app\v0\model\User;
use app\middleware\Auth;
use app\v0\controller\Tool;

class Power extends BaseController{
    protected $middleware = [Auth::class];
    public function role()
    {
        // $params = request()->param();
        // // $model
        // $role = new Role;
        // // //put
        // // if(!!$params['id']){
        // //     //修改角色信息
        // //     $role->
        // // }
        // return $this->getRequest($role, $params);
        $info = request()->header();
        $token = $info['authorization'];
        return Tool::getData($token);

    }
    public function user()
    {
        $params = request()->param();
        // $model
        $user = new User;
        return $this->getRequest($user, $params);
    }
    public function isUni($alias)
    {
        return User::where('alias', $alias)->value('Id');
    }
    // public function getRequest($model, $opts)
    // {
    //     //请求方式
    //     $method = strtolower(request()->method());
    //     if (in_array($method, self::$method_type)) {
    //         //调用请求方式对应的方法
    //         $data_name = $method . 'Data';
    //         return $this->$data_name($model, $opts);
    //     }
    //     return false;
    // }
    //GET 获取信息
    protected function getData($model, $params)
    {
        $code = 200;
        if(isset($params['id'])){
            //返回一条信息
            $data = $model->find($params['id']);
        }else{
            //返回list
            $data = $model->select();
        }
        return json($data)->code($code);
    }
    //POST /class：新建一个班
    protected function postData($model, $params)
    {
        $isExit = $model->isUni($params);
        if($isExit){
            $data = ['msg'=>    '数据存在唯一值'];
            $code = 400;
        }else{
            $pk = $model->getPk();
            $model->$pk = uniqid();
            $data = $model->save($params);
            $code = 201;
        }
        // return $code;
        return json($data)->code($code);
    }

    //PUT /class/ID：更新某个指定班的信息（全部信息）
    protected function putData($model, $params)
    {
        $pk = $model->getPk();
        $re = $model->find($params[$pk]);
        if($re){
            //记录存在，提交修改
            $re->save($params);
            $code = 200;
            $data = $re;
        }else{
            //找不到记录，返回错误
            $code = 400;
            $data = "找不到记录";
        }
        return json($data)->code($code);
    }

    //PATCH /class/ID：更新某个指定班的信息（部分信息）
    protected function patchData($model, $params)
    {
        $re = $model->update($params);
        print_r($re);
        // if($re){
        //     $data = '信息修改成功';
        //     $code = 201;
        // }else{
        //     $code = 200;
        //     $data = '数据库不存在你要修改的信息';
        // }
        // return json($data)->code($code);
    }

    //DELETE /class/ID：删除某个班
    protected function deleteData($model, $params)
    {
        $code = 202;
        $pk = $model->getPk();
        $re = $model->find($params[$pk])->delete();
        if($re){
            $data =  'delete success';
        }else{
            $data =  'false';
            $code = 400;
        }
        return json($data)->code($code);
    }
}