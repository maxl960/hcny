<?php
namespace app\v0\model;

use think\Model;

class Role extends Model
{
    protected $name = 'role';
    protected $uni = ['alias'];
    public function isUni($params)
    {
        $option = [];
        foreach($this->uni as $key){
            $option[$key] = $params[$key];
        }
        // print_r($option);
        return Role::where($option)->count();
    }
    public function getPk()
    {
        return $this->pk;
    }
}