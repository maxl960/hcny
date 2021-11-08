<?php
namespace app\v0\model;

use think\Model;
use think\model\concern\SoftDelete;

class User extends Model
{
    use SoftDelete;
    protected $deleteTime = 'is_del';
    protected $name = 'users';
    protected $disuse = ['pwd'];
    public function isName($name)
    {
        return User::where('name', $name)->value('Id');
        // User::withAttr('name', function($value, $data) {
        //     print_r($value);
        //     print_r($data);
        // })->select();
    }
    public function setIdAttr($value)
    {
        // return strtolower($value);
        echo 'Id';
    }
}