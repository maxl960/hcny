<?php
namespace app\v0\controller;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

define('key', 'example_key');
define('payload', [
    "iss" => "http://mgmt.hcny.cn",
    "aud" => "http://example.com"
]);
class Tool{
    static public function MakeToken(){
		$str = md5(uniqid(md5(microtime(true)), true)); //创建唯一token
		$str = sha1($str);
		return $str;
	}
	static public function getToken($data)
    {
		$stamp = time();
        $payload = array_merge(payload,[
			// "aud"	=> request()->header()['referer'],
            "iat" => $stamp,
            "nbf" => $stamp,
            "exp" => $stamp+24*3600,
            'data'  => $data
        ]);
        return $jwt = JWT::encode($payload, key, 'HS256');
    }
    static public function getData($jwt)
    {
        JWT::$leeway = 150;
        $payload = JWT::decode($jwt, new Key(key, 'HS256'));
        if(time() > $payload->exp){
            return 'the token is late';
        }else{
            return $payload->data;
        }
    }
}