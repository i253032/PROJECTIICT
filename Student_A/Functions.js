 function filter()
        {
            console.clear();
             alert("Filtering Items");
            console.log("Soup =", document.getElementById("Soup").checked);
            console.log("Dessert =", document.getElementById("Dessert").checked);
            console.log("Chicken =", document.getElementById("Chicken").checked);
        }

         let qty = 1;
        let price = 1200;
        function minusQty() {
            if (qty > 1) {
                qty--;
                document.getElementById("qty-number").innerText = qty;
            }
        }
        function plusQty() {
            qty++;
            document.getElementById("qty-number").innerText = qty;
        }
        function updateQuantityDisplay() {
            document.getElementById("qty-number").innerText = qty;
        }
        function order(){
            alert("You have ordered " + qty + " Buffalo Wings. Total Price: Rs " + (price * qty));

        }
         function SigninwithFacebook() {
        alert("Sign in with Facebook button clicked!");
    }
    function SigninwithGoogle() {
        alert("Sign in with Google button clicked!");
    }
    function ForgotPassword() {
        alert("Forgot Password button clicked!");
    }   
    function Login() {
        alert("Login button clicked!");
    }
    function SignUp() {
        alert("Don't have an account? Sign Up button clicked!");
    }
     let quantity = 1;
           let pricePerItem = 500;
           function increase(){
            quantity++;
            updateQuantity();
           }
              function decrease(){
                if(quantity>1){
                 quantity--;
                 updateQuantity();
                }
              }
                function updateQuantity(){
                    document.getElementById("qty").innerText = quantity;
                    let totalPrice = quantity * pricePerItem;
                   document.getElementById("total-price").innerText = "Total Price: RS " + totalPrice;
                   document.getElementById("tax-info").innerText = "Tax will be calculated at checkout ( RS " + (totalPrice * 0.1).toFixed(2) + " )";


                }
            function removeItem(){
                if(confirm("Are you sure you want to remove this item from the cart?")){
                    alert("Item removed from cart.");
                }
            }
            function closeCart(){
                alert("Cart Closed");
            }
            function checkout(){
                let total = quantity * pricePerItem;
                alert("Proceeding to Checkout");
            }
            