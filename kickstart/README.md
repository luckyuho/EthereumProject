# 募資平台 - 區塊鏈

這是發布在Rinkeby測試鏈上的區塊鏈募資平台，可使得募資的程序一切透明。  \
新創公司可透過建立自己的專案，在專案內可提出不同的合約 \
每個合約內含有募資活動的描述、需要的總金額，以及接收金額的接受者 \
只要投資者佔該募資活動總人數一半以上，便可宣告該活動成立，資金可轉入接受者的帳戶。

### 合約內容可參照[/ethereum/contracts/Campaign.sol](https://github.com/luckyuho/EthereumProject/blob/main/kickstart/ethereum/contracts/Campaign.sol)

<hr />

下面用圖片來舉例： \
0x51A98...公司建立專案及要成為投資者所需貢獻的最低金額(建立的專案地址為0x573cA...) \
建立專案後點擊(View Campaign)可看到專案裡面目前的總投資客人數與累積的金額，以及需成為投資者的最低金額限制。 \
公司可在View Request裡面新增新的募資活動，在此新增的內容為buy air以及所需的募資金額為10，接收者為0x51A98... \
包含上面新增的募資活動，這間公司目前有三個募資活動，分別為:
- buy stationary
- buy pokemon cards
- buy air
可看到buy stationary贊同人數已過半，並且公司已完成轉帳，因此在finalize標示已經完成 \
而buy pokemon cards這項則因為目前贊同人數未過半，因此還無法將金額轉給接收者 \
buy air則是贊同人數已達門檻（一半以上），因此可決定是否要將所需的募資金額轉帳給接收者 \
如果公司決定通過的話，金額會自動轉給接收者後，便如同buy stationary顯示依樣，標示該募資活動已完成。 \

### 下面有圖片可參考：

建立專案:

<img src="https://github.com/luckyuho/EthereumProject/blob/main/kickstart/images/allCampaigns.png" width=1000 height=380 title="建立專案" />


詳細資料:

<img src="https://github.com/luckyuho/EthereumProject/blob/main/kickstart/images/campaignDetail.png" width=700 height=400 title="詳細資料" />


新增募資活動:

<img src="https://github.com/luckyuho/EthereumProject/blob/main/kickstart/images/newCampaign.png" width=1000 height=400 title="新增募資活動" />


募資活動一覽:

<img src="https://github.com/luckyuho/EthereumProject/blob/main/kickstart/images/campaigns.png" width=1000 height=400 title="募資活動一覽" />
