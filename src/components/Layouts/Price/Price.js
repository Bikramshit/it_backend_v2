const Price =({number})=> {
    return Intl.NumberFormat("en-IN", {
         
    }).format(number);
};

export default Price;