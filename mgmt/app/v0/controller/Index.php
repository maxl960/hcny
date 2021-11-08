<?php
namespace app\v0\controller;

use app\BaseController;

class Index extends BaseController
{
    public function index()
    {
        return redirect('/v0');
    }
    public function testSql()
    {
        echo 'test sql';
    }
}
