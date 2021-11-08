# 数据库表

User(<u>Id</u>, name, tel, add, divide, status, type)


| Users  | 字段名   | 类型  | 说明                             |
| -------- | ---------- | ------- | ---------------------------------- |
| Id     | 用户Id   | int   | key                              |
| name   | 用户名   | vchar | 注册用户名（唯一）               |
| pwd    | 密码     |       | MD5加密                          |
| tel    | 手机     |       |                                  |
| add    | 地址     |       |                                  |
| status | 用户状态 | int   | 0:审核未通过/非工作状态 1:已审核 |
| type   | 用户类型 | int   | 1:销售 0:管理审核人员 2:企业     |

Customers(Id, saleId, company ,leve, tel, add, status)


| CustomersUser | 字段名    | 类型 | 说明                                 |
| --------------- | ----------- | ------ | -------------------------------------- |
| customId      | 用户Id    | int  |                                      |
| saleId        | 销售Id    | int  | 开发新客户的销售人员，完成第一单交易 |
| legal_person  | 法人      | int  | 企业法人                             |
| company       | 公司/企业 |      | MD5加密                              |
| level         | 等级      |      | 成交金额                             |

Contracts(contractNo, saleId, customId)


| Contracts  | 字段名   | 类型  | 说明 |
| ------------ | ---------- | ------- | ------ |
| contractNo | 合同单号 | vchar | 说明 |
| customId   | 客户Id   |       |      |
| saleId     | 销售Id   |       |      |
| amount     | 成交金额 |       |      |
| commission | 提成     | flint | 0.15 |

Role(type, name)
| Contracts  | 字段名   | 类型  | 说明 |
| ------------ | ---------- | ------- | ------ |
| type | 角色类型 | int | 0 1 2 |
| name   | 角色名   |    vchar   |管理员/销售/客户/      |