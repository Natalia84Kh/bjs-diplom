
const logoutButton = new LogoutButton ();

logoutButton.action = () => {
  ApiConnector.logout((response)=>{
    if(response.success){
      location.reload();
    }
  })
}

ApiConnector.current((response)=> {
    if(response.success){
        ProfileWidget.showProfile(response.data);
    }
});

const ratesBoard = new RatesBoard ();

ratesBoard.ratesBoardCallback = (data) => {
    ApiConnector.getStocks((response) => {
        if(response.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
        }
    })
};

ratesBoard.ratesBoardCallback();
setInterval(ratesBoard.ratesBoardCallback, 20000);
