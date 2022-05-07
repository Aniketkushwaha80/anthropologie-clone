import "./cartpage.css";

export const Cartpage = ()=>{
    return(
        <div className="main-Cart">
            <div className="cart-left">
                <div className="producthead">
                    <b>Basket</b>
                </div>
                <div className="productmid">
                    <div>Item</div>
                    <div>Item price</div>
                    <div>Quantity</div>
                    <div>Total price</div>
                </div>
                <div className="productdetails">
                    <div className="prod-img">
                        <img src="https://images.urbndata.com/is/image/Anthropologie/68694645_066_b?fit=constrain&fmt=webp&hei=195&qlt=80&wid=130" alt="" />
                    </div>
                    <div className="prod-detail">
                        <p>Title</p>
                        <p>colour</p>
                        <p>size</p>
                    </div>
                    <div className="prod-price">
                        <p>13.00</p>
                    </div>
                    <div className="prod-quantity">
                        <select name="" id="quant">
                           <option value="">1</option>
                           <option value="">2</option>
                           <option value="">3</option>
                           <option value="">4</option>
                           <option value="">5</option>
                           <option value="">6</option>
                           <option value="">7</option>
                           <option value="">8</option>
                           <option value="">9</option>
                           <option value="">10</option>
                           <option value="">11</option>
                           <option value="">12</option>
                           <option value="">13</option>
                           <option value="">14</option>
                           <option value="">15</option>
                           <option value="">16</option>
                           <option value="">17</option>
                           <option value="">18</option>
                           <option value="">19</option>
                           <option value="">20</option>
                        </select>
                    </div>
                    <div className="prod-total">
                        <p>13.00</p>
                    </div>
                </div>
                
            </div>
            <div className="cart-right"></div>
        </div>
    )
}