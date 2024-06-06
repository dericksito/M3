export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { return response.json() }).then((json) => { console.log(json) });
}



export const createPostService = (post,fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            TP:post.TP,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
 
    fetch('https://jsonplaceholder.typicode.com/posts',config).then((response) => { return response.json() }).then((json) => { console.log(json);fnExito(); });
}


export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id:1,
            title: 'mensaje final',
            body: 'hasta la vista bb',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
 
    fetch('https://jsonplaceholder.typicode.com/posts/1',config).then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const getByUserIdService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then((response) => { return response.json() }).then((json) => { console.log(json) });
}

//btotones adicionales
export const getProductsService = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  export const createProductService = () => {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        title: 'Nuevo producto',
        price: 10.99,
        description: 'Descripción del producto',
        category: 'Electronics',
        image: 'https://via.placeholder.com/150',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    };
  
    fetch('https://fakestoreapi.com/products', config)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }
  
  
  export const updateProductsService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1, 
            title: 'Título actualizado',
            price: 19.99,
            description: 'Descripción actualizada',
            category: 'Electronics',
            image: 'https://via.placeholder.com/150',
        }),
        headers: {
          'Content-type': 'application/json',
        },
      };
    
      fetch('https://fakestoreapi.com/products/1', config)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
  }

  export const getDocumentTypes=()=>{
    fetch('http://192.168.1.7:8080/inventario1/rest/tiposdocumentos/recuperar').then((response) => { return response.json() }).then((json) => { console.log(json) });
  }
  

  