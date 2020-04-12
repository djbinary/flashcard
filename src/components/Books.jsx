import React from 'react';

function Books(){
    return(
        <div ClassName = "books">
          <div class="carouselbox">
  <div class="buttons">
    <button class="prev">
      ◀ <span class="offscreen">Previous</span>
    </button>
    <button class="next">
      <span class="offscreen">Next</span> ▶ 
    </button>
  </div>
  <ol class="content">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ol>
</div>
        </div>
    );
}

export default Books;