import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('delhi_metro.db');

export default db;


