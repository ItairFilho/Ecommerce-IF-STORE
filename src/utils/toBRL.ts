export function toBRL (price: number) {
    return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
