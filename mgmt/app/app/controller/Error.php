<?php
namespace app\app\controller;

use think\Request;
use app\BaseController;

class Error extends BaseController{
    function __construct(Request $request)
    {
        $url = $request->url();
        echo '/public'.$url;
        // redirect('/public'.$url);
    }
    public function index(Request $request){
        $url = $request->url();
        echo $url;
        // return $this->goto_url($url);
    }
    
    protected function goto_url($url){
        redirect('/app');
    }
}