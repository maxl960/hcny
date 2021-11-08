<?php
namespace app\v0\controller;

use app\BaseController;
use Casbin\Enforcer;
use CasbinAdapter\Database\Adapter as DatabaseAdapter;
define('CONF', [
    'type'     => 'mysql', // mysql,pgsql,sqlite,sqlsrv
    'hostname' => '127.0.0.1',
    'database' => 'hcny_mgmt',
    'username' => 'root',
    'password' => '123456',
    'hostport' => '3306',
]);
class Auth extends BaseController{
    // const CONF = [
    //     'type'     => 'mysql', // mysql,pgsql,sqlite,sqlsrv
    //     'hostname' => '127.0.0.1',
    //     'database' => 'hcny_mgmt',
    //     'username' => 'root',
    //     'password' => '123456',
    //     'hostport' => '3306',
    // ];
    function __construct()
    {
        $this->adapter = DatabaseAdapter::newAdapter(CONF);
    }
    public function test()
    {
        $e = new Enforcer(config_path()."model.conf", $this->adapter);
        $a = $e->getAllSubjects();
        // $a = $e->HasPolicy("alice", "data1", "read");
        print_r($a);
        //Enforcer::addPermissionForUser('eve', 'articles', 'read');

    }
}