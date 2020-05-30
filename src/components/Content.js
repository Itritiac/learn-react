import React from 'react';

let Content = () =>{
  return(
    <div className = 'content'>
        <div className = 'content-image'>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
          </div>
          <div className = 'content__avatar'>

              <div className = 'content__avatar-image'>
                <img src="data:image/png;base64,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"></img>
              </div>
              <div>
                <div>Name and Surname</div>
                <div>Email </div>
                <div>Phone</div>
              </div>
            </div>
          </div>
  );
}
export default Content;