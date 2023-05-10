import { useState } from "react"
// import FbImageLibrary from "react-fb-image-grid"
// import PostFooter from "../PostFooter"
import PostFooter from "../PostFooter"



function Dashboard(props) {
    // console.log(props.products.products)
    return (<>


        <p>Welcome to Dashboard</p>
        <br />
        {props.products.products.map((item) => {
            return <>
                <div className="product">
                    <div className="productH1">
                        <p className="productH1">
                            <img src={item.thumbnail}
                                className='imgH1' />
                        </p>
                        <p className='h1Text'>
                            {item.title}
                            <br />
                            <span className='date'>
                                Apr 7 2023
                            </span>
                        </p>
                    </div>

                    <div className='productDescription'>
                        <p className="productDescription">
                            {item.description}
                            <br />
                            Rating: <b>{item.rating}</b> out of 5
                            <br />
                            Price: <b>${item.price}</b>
                        </p>
                        <img src={item.images[0]} width={200} height={200} alt="image" />

                    </div>

                    {/* <div className='productImages'>
                        {item.images.map((img, ind) => {
                            // console.log(img)
                            return <>
                                <img src={img} width={200} height={200} alt={"Image" + (ind + 1)} />
                            </>
                        })}
                    </div> */}

                    <PostFooter />

                </div>
            </>
        })}
    </>)
}













export default Dashboard