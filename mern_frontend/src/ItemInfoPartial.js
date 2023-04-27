import './App.css';
import React from 'react';
import './index.css';

function ItemInfoPartial() {
  return (
    <div class="row">
    <div class="col-md-4 mt-2">
      <div class="card">
        <div class="card-body">
          <div class="card-img-actions">Image</div>
        </div>
        <div class="card-body bg-light text-center">
          <div class="mb-2">
            <h6 class="font-weight-semibold mb-2">
              <a href="#" class="text-default mb-2" data-abc="true">
                Toshiba Notebook with 500GB HDD & 8GB RAM
              </a>
            </h6>
            <a href="#" class="text-muted" data-abc="true">
              Laptops & Notebooks
            </a>
          </div>
          <h3 class="mb-0 font-weight-semibold">$250.99</h3>
          <h7>Description here</h7>
          <div class="text-muted mb-3">4.3/5.0 rating | 34 reviews</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ItemInfoPartial;
