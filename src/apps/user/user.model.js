import { Model } from "objection"

export class User extends Model {
    static get tableName() {
        return "user"
    }

    //json字段，读取和写入的时候自动转换
    static get jsonAttributes() {
        return ['attrs']
    }

    //重写序列化方法来排除字段
    //即在查询的时候不查询这两个字段出来
    $formatJson(json) {
        json = super.$formatJson(json)
        delete json.createdAt
        delete json.updatedAt
        return json
    }
}