function formatPrice(number) {
    const options = { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }
    const arsFormat = Intl.NumberFormat('es-AR', options);
    return arsFormat.format(number);
}

export default formatPrice;