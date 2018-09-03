
const Gfycat = require('gfycat-sdk');

var gfycat = new Gfycat({clientId: "2_V_2Mfq", clientSecret: "6KB6skLkgOZfFqMMmfmAZ4R-iT7EHI4YwGiKgmWzlDW7UJPLt4KTlaTe2KQzFx1w"});

gfycat.authenticate().then(res => {
  //Your app is now authenticated
  assert.equal(res.access_token, gfycat.token);
  console.log('token', gfycat.token);
});
