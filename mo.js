const file = require('./files');
const mo = new file.Model();

const producerObserver1 = new file.ProducerObserver();
const retailerObserver1 = new file.RetailerObserver();
const consumerObserver1 = new file.ConsumerObserver();
const recyclerObserver1 = new file.RecyclerObserver();

mo.registerObserver('Producer', producerObserver1);
mo.registerObserver('Retailer', retailerObserver1);
mo.registerObserver('Consumer', consumerObserver1);
mo.registerObserver('Recycler', recyclerObserver1);

async function started(product, event) {
	await mo.notifyAll(event, product);
}

module.exports = started;
