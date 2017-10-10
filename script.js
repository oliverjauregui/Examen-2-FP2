class Sell {
	constructor(product, cant, price) {
		this.product = product;
		this.cant = cant;
		this.price = price;
	}

  getProduct(){
    return this.product;
  }

  getCant(){
    return this.cant;
  }

	getPrice(){
		return this.price;
	}

	getTotal(){
		return this.price * this.cant;
	}

  getWin(){
    return this.getTotal() * 0.1;
  }
}

const sale1 = new Sell("Sal", 5, 2);
const sale2 = new Sell("Papa", 7, 3);
const sale3 = new Sell("Queso", 1, 5);

class Amount {
	constructor(name) {
		this.name = name;
		this.products = new Array();
	}

	getName(){
		return this.name;
	}

	addProduct(sale){
		this.products.push(sale);
	}

	print(){
		let sumProm = 0;
		console.log(this.getName());
		console.log("---------");
		for (let sale of this.products){
      console.log(`${sale.getProduct()}: ${sale.getCant()}: ${sale.getPrice()}: ${sale.getTotal()}: ${sale.getWin()}`);
			sumProm = sumProm + sale.getTotal();
		}
		console.log(`El total de dinero que entro en la caja es ${sumProm}`)
	}
}

const shop = new Amount("Tiendita Don Jose");
shop.addProduct(sale1);
shop.addProduct(sale2);
shop.addProduct(sale3);
shop.print();
