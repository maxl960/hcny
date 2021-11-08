<?php
namespace app\tools\controller;
use jianyan\excel\Excel;

class phpExcel{
    public function index()
    {
        // [名称, 字段名, 类型, 类型规则]
        $header = [
            ['ID', 'id', 'text'],
            ['手机号码', 'mobile'], // 规则不填默认text
            ['openid', 'fans.openid', 'text'],
            ['昵称', 'fans.nickname', 'text'],
            ['关注/扫描', 'type', 'selectd', [1 => '关注', 2 => '扫描']],
            ['性别', 'sex', 'function', function($model){
                return $model['sex'] == 1 ? '男' : '女';
            }],
            ['创建时间', 'created_at', 'date', 'Y-m-d'],
            ['图片', 'image', 'text'],// 本地图片 ./images/765456898612.jpg
        ];

        $list = [
            [
                'id' => 1,
                'type' => 1,
                'mobile' => '18888888888',
                'fans' => [
                    'openid' => '123',
                    'nickname' => '昵称',
                ],
                'sex' => 1,
                'create_at' => time(),
            ]
        ];
        return Excel::exportData($list, $header);
    }
}