export class Investment{
name: string
worth: number
worthText: HTMLElement | null
ownedStocks: number
ownedStocksText: HTMLElement | null
numberInput: HTMLElement | null
buyInput: HTMLElement | null
sellInput: HTMLElement | null
total: HTMLElement | null

    constructor(name: string, worth: number, worthText: HTMLElement | null, ownedStocks: number, ownedStocksText: HTMLElement | null, numberInput: HTMLElement | null, buyInput: HTMLElement | null, sellInput: HTMLElement | null, total: HTMLElement | null){
        this.name = name;
        this.worth = worth;
        this.worthText = worthText;
        this.ownedStocks = ownedStocks;
        this.ownedStocksText = ownedStocksText;
        this.numberInput = numberInput;
        this.buyInput = buyInput;
        this.sellInput = sellInput;
        this.total = total;
    }

    Buy(money:number) {
        if(this.numberInput && money >= this.worth * parseInt((<HTMLInputElement>this.numberInput).value)){
            money -= this.worth * parseInt((<HTMLInputElement>this.numberInput).value);
            this.ownedStocks += parseInt((<HTMLInputElement>this.numberInput).value);
            this.numberInput.nodeValue;
        }
        return money;
    }

    Sell(money:number){
        if(this.numberInput && this.ownedStocks >= parseInt((<HTMLInputElement>this.numberInput).value)){
            money += this.worth * parseInt((<HTMLInputElement>this.numberInput).value);
            this.ownedStocks -= parseInt((<HTMLInputElement>this.numberInput).value);
        }
        return money;
    }
}