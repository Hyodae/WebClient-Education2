import express from 'express';
import sqliteBridge from './databaseBridge';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json({
  limit: '10mb',
  extended: true
})); // post json parser

function encodeEntities(str) {
  return str
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

// 아이템 등록
app.post('/api/movies', async (req, res) => {
  const {
    title = "",
      content = "",
      star = 0,
      image = '',
      referenceUrl = ""
  } = req.body;
  try {
    const statement = await bridge.insertItem({
      title: encodeEntities(title),
      content: encodeEntities(content),
      star,
      image,
      referenceUrl
    });
    res.json({
      no: statement.stmt.lastID
    });
  } catch (e) {
    console.log(e);
    res.json({});
  }
});


// 아이템 조회 (다건)
app.get('/api/movies', async (req, res) => {
  let items = await bridge.items();
  items = items.map(item => {
    item.title = decodeEntities(item.title);
    item.content = decodeEntities(item.content);
    return item;
  });
  res.json(items);
});

// 아이템 조회 (단건)
app.get('/api/movies/:no', async (req, res) => {
  const {
    no
  } = req.params;
  const item = await bridge.item(no);
  item.title = decodeEntities(item.title);
  item.content = decodeEntities(item.content);
  res.json(item);
});

// 아이템 삭제
app.delete('/api/movies/:no', async (req, res) => {
  const {
    no
  } = req.params;
  try {
    await bridge.deleteItem(no);
    res.json({
      no
    });
  } catch (e) {
    res.json({});
  }
});
// 아이템 수정
app.put('/api/movies/:no', async (req, res) => {
  const {
    no
  } = req.params;
  const {
    title = "",
      content = "",
      star = null,
      image = null,
      reference_url = ""
  } = req.body;
  try {
    await bridge.updateItem(no, {
      title: encodeEntities(title),
      content: encodeEntities(content),
      star,
      image,
      referenceUrl: reference_url
    });
    res.json({
      no
    });
  } catch (e) {
    res.json({});
  }
});

let bridge;
async function main() {
  bridge = await sqliteBridge.connect();
  app.listen(port, () => console.log(`listening on port ${port}`));
}
main();