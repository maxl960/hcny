<?php
namespace app\v0\controller;
/**
 * 数据操作类
 */
use app\BaseController;

class Request extends BaseController
{
    //允许的请求方式
    private static $method_type = array('get', 'post', 'put', 'patch', 'delete');
    //测试数据
    private static $test_class = array(
        1 => array('name' => '托福班', 'count' => 18),
        2 => array('name' => '雅思班', 'count' => 20),
    );

    public static function getRequest($model, $opts)
    {
        //请求方式
        $method = strtolower($_SERVER['REQUEST_METHOD']);
        if (in_array($method, self::$method_type)) {
            //调用请求方式对应的方法
            $data_name = $method . 'Data';
            return self::$data_name($_REQUEST, $model, $opts);
        }
        return false;
    }

    //GET 获取信息
    private static function getData($request_data, $model, $opts)
    {
        $re = $model->where('id', 1)->find();
        return $re;
    }

    //POST /class：新建一个班
    private static function postData($request_data)
    {
        print_r($request_data);
    }

    //PUT /class/ID：更新某个指定班的信息（全部信息）
    private static function putData($request_data)
    {
        echo 'save data';
    }

    //PATCH /class/ID：更新某个指定班的信息（部分信息）
    private static function patchData($request_data)
    {
        echo 'update data';
    }

    //DELETE /class/ID：删除某个班
    private static function deleteData($request_data)
    {
        echo 'del data';
    }
}