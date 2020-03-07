export function getSales(context, payload) {
  var vendas = [];
  context.state.ordereds.forEach(order => {
    if (order.status == "Venda") {
      vendas.push(order);
    }
  });
  return vendas;
}
