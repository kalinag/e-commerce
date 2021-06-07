const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.imgur.com/hNuXZ33.jpeg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.imgur.com/T7xUAhW.jpeg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.imgur.com/qnczz5A.jpeg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.imgur.com/cwpEdBk.jpeg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.imgur.com/CS7Evwj.jpeg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;
