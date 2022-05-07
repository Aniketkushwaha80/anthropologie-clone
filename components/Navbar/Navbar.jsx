import "./navbar.css";
export const Navbar = ()=>{
    return(
        <div className="mainNavbar">
            <div className="navTop">
                <div>Language</div>
                <div>sign in/sign up</div>
            </div>
            <div className="navMid">
                <div className="midLeft">
                    <div> <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" alt="Anthropologie" /></div>
                    <div> <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt="AnthroLivinghome" /></div>
                </div>
                <div className="midRight">
                    <div className="midSearch">
                        <input className="Nav-searchbar" type="text" name="box" placeholder="Search Anthropologie" />
                    </div>
                    <div className="cart-logo"><img src="bag.png" alt="Cart" /></div>
                </div>
            </div>
            <div className="navBottom">
                <div><button>New!</button></div>
                <div><button>Gifts for Mom</button></div>
                <div><button>Dresses</button></div>
                <div><button>Clothing</button></div>
                <div><button>Shoes</button></div>
                <div><button>Accessories</button></div>
                <div><button>Home & Furniture</button></div>
                <div><button>Beauty & Wellness</button></div>
                <div><button>Garden & Outdoor</button></div>
                <div><button>Weddings</button></div>
                <div><button>Sale</button></div>
           </div>
        </div>
    )
}