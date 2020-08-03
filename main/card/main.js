
    function userCard(number) {
        let card = {
            cardInfo:{
                balance: 100,
                transactionLimit: 90,            
                historyLogs: [],    
                key: number
            },
            getCardOptions: function() {
                console.log(card.cardInfo);
            },
            putCredits: function (number) {
                this.cardInfo.balance = this.cardInfo.balance + number;
                let now = new Date().toLocaleString();
                this.cardInfo.historyLogs.push({operationType: "Recived credits", credits: number, operationTime: now});
            },
            takeCredits: function (number) {
                if ((this.cardInfo.balance - number) < 0 || this.cardInfo.transactionLimit < number) {
                    console.error('Неможлива операція');
                }
                else{
                    this.cardInfo.balance = this.cardInfo.balance - number;
                    let now = new Date().toLocaleString();
                this.cardInfo.historyLogs.push({operationType: "Withdrawal credits", credits: number, operationTime: now});
                }
                
            },
            setTransactionLimit: function(number) {
                this.cardInfo.transactionLimit = number;
                let now = new Date().toLocaleString();
                this.cardInfo.historyLogs.push({operationType: "Transaction limit change", credits: number, operationTime: now});
            },
            transferCredits: function (number, cardo) {
                if (this.cardInfo.balance >= number && this.cardInfo.transactionLimit >= number) {
                    this.takeCredits(number + (number * 0.005));
                    cardo.putCredits(number);
                }
                else{
                    console.error("Неможлива операція");
                }
                
            }
        }
                 
            return card;
        };

    class UserAccount{
        constructor(name){
            this.name = name
        }
        cards = []
        addCard(){
            if (this.cards.length === 0 ) {
                this.cards.push(userCard(1));    
            }  
            else if (this.cards.length === 1) {
                this.cards.push(userCard(2));    
            }    
            else if (this.cards.length === 2) {
                this.cards.push(userCard(3));    
            }   
        }
        getCardByKey(number){
            return this.cards[number-1];
        }
    }
    
    const user = new UserAccount('Petya');
    user.addCard();
    user.addCard();
   
    let card1 = user.getCardByKey(1);
    let card2 = user.getCardByKey(2);

    
    card1.putCredits(500);
    card1.setTransactionLimit(800);
    card1.transferCredits(300, card2);

    card2.takeCredits(50);
    card1.getCardOptions();
    card2.getCardOptions();



        
    
      