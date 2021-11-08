<?php
declare (strict_types = 1);

namespace app;

use think\App;
use think\exception\ValidateException;
use think\Validate;

/**
 * 控制器基础类
 */
abstract class BaseController
{
    /**
     * Request实例
     * @var \think\Request
     */
    protected $request;

    /**
     * 应用实例
     * @var \think\App
     */
    protected $app;

    /**
     * 是否批量验证
     * @var bool
     */
    protected $batchValidate = false;

    /**
     * 控制器中间件
     * @var array
     */
    protected $middleware = [];

    /**
     * 构造方法
     * @access public
     * @param  App  $app  应用对象
     */
    public function __construct(App $app)
    {
        $this->app     = $app;
        $this->request = $this->app->request;

        // 控制器初始化
        $this->initialize();
    }

    // 初始化
    protected function initialize()
    {}

    /**
     * 验证数据
     * @access protected
     * @param  array        $data     数据
     * @param  string|array $validate 验证器名或者验证规则数组
     * @param  array        $message  提示信息
     * @param  bool         $batch    是否批量验证
     * @return array|string|true
     * @throws ValidateException
     */
    protected function validate(array $data, $validate, array $message = [], bool $batch = false)
    {
        if (is_array($validate)) {
            $v = new Validate();
            $v->rule($validate);
        } else {
            if (strpos($validate, '.')) {
                // 支持场景
                [$validate, $scene] = explode('.', $validate);
            }
            $class = false !== strpos($validate, '\\') ? $validate : $this->app->parseClass('validate', $validate);
            $v     = new $class();
            if (!empty($scene)) {
                $v->scene($scene);
            }
        }

        $v->message($message);

        // 是否批量验证
        if ($batch || $this->batchValidate) {
            $v->batch(true);
        }

        return $v->failException(true)->check($data);
    }
    protected function token()
    {
        $v = 1;
        $key = mt_rand();
        $hash = md5($key . $v . mt_rand() . time());
        $token = base64_encode($hash);
        return $token;
    }
    /*
    *restFul请求人口
    *getRequest
    */
    protected static $method_type = array('get', 'post', 'put', 'patch', 'delete');
    public function getRequest($model, $opts)
    {
        //请求方式
        $method = strtolower(request()->method());
        if (in_array($method, self::$method_type)) {
            //调用请求方式对应的方法
            $data_name = $method . 'Data';
            return $this->$data_name($model, $opts);
        }
        return false;
    }
    //GET 获取信息
    protected function getData($model, $params)
    {
        $re = $model->where($params)->find();
        return $re;
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
