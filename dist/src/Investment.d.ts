export declare class Investment {
    name: string;
    worth: number;
    worthText: HTMLElement | null;
    ownedStocks: number;
    ownedStocksText: HTMLElement | null;
    numberInput: HTMLElement | null;
    buyInput: HTMLElement | null;
    sellInput: HTMLElement | null;
    total: HTMLElement | null;
    constructor(name: string, worth: number, worthText: HTMLElement | null, ownedStocks: number, ownedStocksText: HTMLElement | null, numberInput: HTMLElement | null, buyInput: HTMLElement | null, sellInput: HTMLElement | null, total: HTMLElement | null);
    Buy(money: number): number;
    Sell(money: number): number;
}
