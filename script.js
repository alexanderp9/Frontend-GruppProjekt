function displayProducts(categoryTitle,categoryAPI) {
     fetch(categoryAPI)
         .then(res => res.json())
         .then(products => {
             let productList = document.getElementById('product-list');
             products.forEach(product => {
               document.getElementById('categoryTitle').innerHTML = categoryTitle;


                 const productContainer = document.createElement('div');
                 productContainer.classList.add('card');
                 productContainer.classList.add('m-2');
                 productContainer.style.width = '15rem';

                 const prodImgDiv = document.createElement('div');
                 prodImgDiv.classList.add('text-center');

                 const prodImg = document.createElement('img');
                 prodImg.src = product.image;
                 prodImg.alt = product.title;
                 prodImg.classList.add('card-img-top');
                 prodImg.classList.add('bg-secondary');
                 prodImg.style.height = '10em';
                 prodImg.style.maxWidth = 'fit-content';
                 prodImgDiv.appendChild(prodImg);

                 productContainer.appendChild(prodImgDiv);

                 const prodBody = document.createElement('div');
                 prodBody.classList.add('card-body');
                 prodBody.classList.add('bg-white');

                 const prodCatetory = document.createElement('a');
                 prodCatetory.href = '#';
                 prodCatetory.textContent = `${product.category}`;
                 prodBody.appendChild(prodCatetory);

                 const prodBodyTitle = document.createElement('h5');
                 prodBodyTitle.classList.add('card-title');
                 prodBodyTitle.textContent = `${product.title}`;
                 prodBody.appendChild(prodBodyTitle);

                 const prodPrice = document.createElement('p');
                 prodPrice.classList.add('card-text');
                 prodPrice.textContent = `${product.price} kr`;
                 prodBody.appendChild(prodPrice);

                 const proBodyOrderBtn = document.createElement('input');
                 proBodyOrderBtn.type = 'submit';
                 proBodyOrderBtn.classList.add('btn');
                 proBodyOrderBtn.classList.add('btn-primary');
                 proBodyOrderBtn.classList.add('align-bottom-left');
                 proBodyOrderBtn.value = 'Beställ';
                 prodBody.appendChild(proBodyOrderBtn);


                 proBodyOrderBtn.addEventListener("click", function() {
                     sendData(product);

                 });

                 productContainer.appendChild(prodBody);
                 productList.appendChild(productContainer);

             });
         });
 }