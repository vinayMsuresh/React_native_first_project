import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('db.testDB');

export const createTable = () => {
    db.transaction((txt) => {
        txt.executeSql(
            `CREATE TABLE IF NOT EXISTS
            USERS (ID INTEGER PRIMARY KEY AUTOINCREMENT, EMAIL TEXT, PASSWORD TEXT);
            `)
    })
}

