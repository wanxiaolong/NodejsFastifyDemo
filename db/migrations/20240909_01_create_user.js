const tableName = 'user'

//knex在migrate的时候会调用的方法，方法名字固定，不能改动
export function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id')//创建一个自增的主键
    table.string('name').notNull()
    table.integer('age').notNull()
    table.json('attrs').defaultTo('{}')
    table.datetime('createdAt').defaultTo(knex.fn.now())
    table.datetime('updatedAt').defaultTo(knex.fn.now())
  })
}

//knex在rollback的时候会调用的方法，方法名字固定，不能改动
export function down(knex) {
  return knex.schema.dropTableIfExists(tableName)
}
