<?php
namespace app\tools\controller;
use Firebase\JWT\JWT;

define('key', 'example_key');
define('payload', [
    "iss" => "http://example.org",
    "aud" => "http://example.com"
]);

class token{
    static public function getToken($data)
    {
        $stamp = time();
        $payload = array_merge(payload,[
            "iat" => $stamp,
            "nbf" => $stamp+24*3600,
            'data'  => $data
        ]);
        return $jwt = JWT::encode($payload, key);
    }
    static public function getData($jwt)
    {
        $payload = JWT::decode($jwt, key, array('HS256'));
        if(time() > $payload->nbf){
            return 'the token is late';
        }else{
            return $payload->data;
        }
    }
}