import sqlite from 'sqlite';

// https://github.com/mapbox/node-sqlite3/wiki/API
// https://www.sqlite.org/lang.html
class DatabaseBridge {
  constructor() {
    this._db = null;
  }
  async connect() {
    this._db = await sqlite.open('db.sqlite');
    return this;
  }
  async insertItem({
    title,
    content,
    star,
    image,
    referenceUrl
  }) {
    return await this._db.run(`INSERT INTO MOVIE 
      (title, content, star, image, reference_url, reg_date) VALUES(
      '${title}', '${content}', ${star}, '${image}', '${referenceUrl}', CURRENT_TIMESTAMP
      )`);
  }
  async deleteItem(no) {
    return await this._db.run(`DELETE from MOVIE where no = ${no}`);
  }
  async updateItem(no, {
    title,
    content,
    star,
    image,
    referenceUrl
  }) {
    const columns = [];

    (title != null) && columns.push(`title = '${title}'`);
    (content != null) && columns.push(`content = '${content}'`);
    (star != null) && columns.push(`star = ${star}`);
    (image != null) && columns.push(`image = '${image}'`);
    (referenceUrl != null) && columns.push(`reference_url = '${referenceUrl}'`);

    if (columns.length) {
      return await this._db.get(`UPDATE MOVIE SET ${columns.join(',')} where no = ${no}`);
    } else {
      return;
    }
  }
  async items() {
    return await this._db.all('SELECT * from MOVIE order by no desc');
  }
  async item(no) {
    return await this._db.get(`SELECT * from MOVIE where no = ${no}`);
  }
  async close() {
    if (this._db) {
      await this._db.close();
      this._db = null;
    }
  }
}

export default new DatabaseBridge();