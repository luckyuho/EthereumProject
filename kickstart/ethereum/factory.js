import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
// console.log(CampaignFactory);
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2b163a1f8D2188f94755AeD7859AFf330b161a70" // v3
  // "0xFC9C7cDD332EF63B9fB04a4eba6016Dd96fB589C" // v2
  // "0x330026b8dAb3E82ac830C9afC6a5c7AA4dbf9ade" // v1
);

export default instance;
