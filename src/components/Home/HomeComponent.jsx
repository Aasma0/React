import React from 'react';
import CardComponent from '../card/CardComponent';
import EventHandling from '../EventHandling/EventHandling';
import EventFunctionProps from '../EventHandling/EventFunctionProps';
import ListViewComponent from '../ListView/ListViewComponent';

const HomeComponents = () => {
  const ProductData = [{
        imgUrl:"https://images.unsplash.com/photo-1705326433040-59bd04978654?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Coffee",
        description:"Description of Monalisa"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1720692739658-ee952b1aebb1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Coffee",
        description:"Description of Coffee"
    },

    {
        imgUrl:"https://images.unsplash.com/photo-1717768024341-642ff6929e67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Coffee",
        description:"Description of Coffee"
    }]

    const listItems = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <div className="p-6 bg-gray-200 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Home Components</h1>
  
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Event Function Props</h2>
          <EventFunctionProps />
        </div>
  
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">List View</h2>
          {/* <ListViewComponent items={listItems} /> */}
          <ListViewComponent items={listItems}/>
        </div>
      </div>
    );
  };


export default HomeComponents;