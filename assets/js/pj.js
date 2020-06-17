var ic = 0;
// increasing quantity in cart
function incrementquantity(id, i, cost){
    var x = document.getElementById(id).innerHTML;
    var y = parseInt(x)+1;
    if(y == 1){
        document.getElementById(i).disabled = false;
    }
    document.getElementById(id).innerHTML = y;
    var z = document.getElementById("subtotal").innerHTML;

    document.getElementById("subtotal").innerHTML = '₹' + (parseInt(z.replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById(cost).innerHTML).replace(/[^0-9.-]+/g, '')));
    document.getElementById("taxtotal").innerHTML = '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) * 0.18);
    document.getElementById("shipping").innerHTML = '₹' +  (parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) + 10);
    document.getElementById("total").innerHTML = '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("taxtotal").innerHTML).replace(/[^0-9.-]+/g, '')));
    
}

// decreasing quantity in cart
function decrementquantity(id, i, cost){
    var x = document.getElementById(id).innerHTML;
    var y = parseInt(x)-1;
    if(y == 0){
        document.getElementById(i).disabled = true;
    }
    document.getElementById(id).innerHTML = y;
    var z = document.getElementById("subtotal").innerHTML;

    document.getElementById("subtotal").innerHTML = '₹' + (parseInt(z.replace(/[^0-9.-]+/g, '')) - parseInt((document.getElementById(cost).innerHTML).replace(/[^0-9.-]+/g, '')));
    document.getElementById("taxtotal").innerHTML =  '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) * 0.18);
    document.getElementById("total").innerHTML = '₹' + (parseInt((document.getElementById("total").innerHTML).replace(/[^0-9.-]+/g, '')) - parseInt((document.getElementById(cost).innerHTML).replace(/[^0-9.-]+/g, '')) - 10);
    document.getElementById("shipping").innerHTML = '₹' +  (parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) - 10);
}

//

function product(prodimg, prodname, prodcategory, prodprice){
    var count = document.getElementById('cartproducts');
    var sameClass = count.getElementsByClassName("p-2").length;
    console.log(sameClass);
    var nexttablerow = document.createElement("tr");
    nexttablerow.className = (sameClass + 1);
    var nexttablehead = document.createElement("th");
    nexttablehead.scope = "row";
    var nextdiv1 = document.createElement("div");
    nextdiv1.className="p-2";
    var image = document.createElement("img");
    image.src = prodimg;
    image.alt="";
    image.width="70";
    image.className="img-fluid rounded shadow-sm";
    var nextdiv2 = document.createElement("div");
    nextdiv2.className = "ml-3 d-inline-block align-middle";
    var head5 = document.createElement("h5");
    head5.className="mb-0";
    var link = document.createElement("a");
    link.src="#";
    link.className="text-dark d-inline-block align-middle";
    link.innerHTML = prodname;
    head5.appendChild(link);
    var spanelement = document.createElement("span");
    spanelement.className="text-muted font-weight-normal font-italic d-block";
    spanelement.innerHTML = "Category: " + prodcategory;
    nextdiv2.appendChild(head5);
    nextdiv2.appendChild(spanelement);
    nextdiv1.appendChild(image);
    nextdiv1.appendChild(nextdiv2);
    nexttablehead.appendChild(nextdiv1);
    var data1 = document.createElement("td");
    data1.className = "border-0 align-middle";
    var strongprice = document.createElement("strong");
    strongprice.id = "price"+(sameClass+1).toString();
    strongprice.innerHTML = prodprice;
    data1.appendChild(strongprice);
    var data2 = document.createElement("td");
    data2.className = "border-0 align-middle text-center";
    var but = document.createElement("button");
    but.href = "#";
    but.className="text-dark btn-xs btn-primary";
    but.style = "margin-right: 10px";
    var clicklink = "incrementquantity('quantity"+(sameClass+1).toString()+"','minus"+(sameClass+1).toString()+"',"+"'price"+(sameClass+1)+"')";
    but.setAttribute("onclick", clicklink);
    var icon1 = document.createElement("i");
    icon1.className="fa fa-plus";
    but.appendChild(icon1);
    var strongquantity = document.createElement("strong");
    strongquantity.id = "quantity"+(sameClass+1).toString();
    strongquantity.innerHTML = 1;
    var but2 = document.createElement("button");
    but2.href="#";
    but2.className = "text-dark btn-xs btn-primary"
    but2.style = "margin-left: 10px";
    but2.id = "minus"+(sameClass+1).toString();
    var clicklink2 = "decrementquantity('quantity"+(sameClass+1).toString()+"','minus"+(sameClass+1).toString()+"',"+"'price"+(sameClass+1)+"')";
    but2.setAttribute("onclick", clicklink2);
    var icon2 = document.createElement("i");
    icon2.className="fa fa-minus";
    but2.appendChild(icon2);
    data2.appendChild(but);
    data2.appendChild(strongquantity);
    data2.appendChild(but2);
    var data3 = document.createElement("td");
    data3.className = "border-0 align-middle text-center";
    var alink = document.createElement("a");
    alink.href = "#";
    alink.className="text-dark";
    var tempitemnumber = "deleteitem('"+(sameClass+1)+"', 'price"+(sameClass+1)+"')";
    alink.setAttribute("onclick", tempitemnumber);
    var icon3 = document.createElement("i");
    icon3.className="fa fa-trash";
    alink.appendChild(icon3);
    data3.appendChild(alink);
    nexttablerow.appendChild(nexttablehead);
    nexttablerow.appendChild(data1);
    nexttablerow.appendChild(data2);
    nexttablerow.appendChild(data3);
    count.appendChild(nexttablerow);
    // updating subtotal and total
    ic = ic + 1;
    document.getElementById("subtotal").innerHTML = '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById(strongprice.id).innerHTML).replace(/[^0-9.-]+/g, '')));
    document.getElementById("shipping").innerHTML = '₹' + (parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) + 10);
    document.getElementById("taxtotal").innerHTML = '₹' + ((parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) * (0.18)));
    document.getElementById("total").innerHTML = '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("taxtotal").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')));
    document.getElementsByClassName("dot")[0].innerHTML = ic;
    document.getElementsByClassName("dot")[1].innerHTML = ic;
    document.getElementsByClassName("dot")[2].innerHTML = ic;
    document.getElementsByClassName("dot")[3].innerHTML = ic;
    document.getElementsByClassName("dot")[4].innerHTML = ic;
    document.getElementsByClassName("dot")[5].innerHTML = ic;
}

function deleteitem(x, y){
    console.log(x);
    var str = 'quantity' + y.substring(5,6);
    var temp2 = parseInt((document.getElementById(y).innerHTML).replace(/[^0-9.-]+/g, ''));
    document.getElementById("subtotal").innerHTML = '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) - temp2); 
    document.getElementById("taxtotal").innerHTML =  '₹' + (parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')) * 0.18);
    document.getElementById("shipping").innerHTML =  '₹' + (parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) - (parseInt((document.getElementById(str).innerHTML).replace(/[^0-9.-]+/g, '')) * 10));
    document.getElementById("total").innerHTML =   '₹' + (parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("taxtotal").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("shipping").innerHTML).replace(/[^0-9.-]+/g, '')) + parseInt((document.getElementById("subtotal").innerHTML).replace(/[^0-9.-]+/g, '')));
    var del = document.getElementsByClassName(x)[0];
    del.parentNode.removeChild(del);
    ic = ic - 1;
    document.getElementsByClassName("dot")[0].innerHTML = ic;
    document.getElementsByClassName("dot")[1].innerHTML = ic;
    document.getElementsByClassName("dot")[2].innerHTML = ic;
    document.getElementsByClassName("dot")[3].innerHTML = ic;
    document.getElementsByClassName("dot")[4].innerHTML = ic;
    document.getElementsByClassName("dot")[5].innerHTML = ic;
}

function deleteall(){
    document.getElementById("sucessmessage").innerHTML = "<br><div class='alert alert-success' role='alert'><h4 class='alert-heading'>Thank you for placing order !!</h4><p>We will deleiver it soon..</p><hr><p class='mb-0'>You will get confirmation message shortly.</p><hr><button class='btn btn-primary' onclick='closefunction()'>Close</button></div>";
    document.getElementById("subtotal").innerHTML = '₹ 0';
    document.getElementById("total").innerHTML = '₹ 0';
    document.getElementById("taxtotal").innerHTML = '₹ 0';
    document.getElementById("shipping").innerHTML = '₹ 0';
    var c = document.getElementById("cartproducts").childElementCount;
    for(var i=0; i<c;i++){
        var del = document.getElementsByClassName(i+1)[0];
        del.parentNode.removeChild(del);
    }
    document.getElementsByClassName("dot")[0].innerHTML = 0;
    document.getElementsByClassName("dot")[1].innerHTML = 0;
    document.getElementsByClassName("dot")[2].innerHTML = 0;
    document.getElementsByClassName("dot")[3].innerHTML = 0;
    document.getElementsByClassName("dot")[4].innerHTML = 0;
    document.getElementsByClassName("dot")[5].innerHTML = 0;
    ic = 0;
}

function closefunction(){
    $('#portfolioModal1').modal('hide');$('#portfolioModal2').modal('hide');$('#portfolioModal3').modal('hide');$('#portfolioModal4').modal('hide');$('#portfolioModal5').modal('hide');$('#portfolioModal6').modal('hide');$('#endModal').modal('hide');
    document.getElementById("sucessmessage").innerHTML = "";
}