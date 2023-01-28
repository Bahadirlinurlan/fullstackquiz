import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: "100%", height: "740px", }}>
            <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg' alt='sekil' />
                    </div>
        <div style={{ width: "100%", height: "740px", background: '#065535' }}>
        <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg'alt='sekil' />
        </div>
        <div style={{ width: "100%", height: "740px", background: '#065535' }}>
        <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg'alt='sekil' />
        </div>
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;