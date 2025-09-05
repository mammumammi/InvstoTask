
const PriceBox = () => {


    const Slider = () => {

        return(
            <div className=" bg-emptySliderBg w-full
            h-[10px] rounded-[10px] relative">
                <div className="bg-slider w-[50px] h-[50px] m-auto  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                rounded-full absolute flex items-center justify-center cursor-pointer cursor">

                <img src="/icon-slider.svg" alt=""
                className=""
                />
                </div>

            </div>
        )
    }

    return(
        <div className="m-auto mt-[30px] text-center bg-componentBg w-[90vw] md:w-[500px] h-[500px] md:h-[375px] rounded-[10px]  p-[20px] md:p-[40px] space-y-[20px]">
        
        <p>100K PAGEVIEWS</p>

        <Slider/>

        <div>Pricing</div>

        <div>Price Toggle</div>

        <div>Features</div>

        <div>Trial Button</div>
        </div>
    )
}

export default PriceBox;