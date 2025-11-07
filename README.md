# List products

## Get Started
- Make sure you have [pnpm](https://pnpm.io/installation) installed
- Run `pnpm install` from this directory to install all dependencies
- Run `pnpm dev` from this directory to start a test server
- Run `pnpm test` to run all tests

## Assignment
Implement a product list using [Vue 3](https://vuejs.org/guide/introduction.html).
We prepared a minimal application setup and in the following tasks you shall fill it with content.

You can explore the example data that we use on https://dummyjson.com/products. The application loads the first 100 items. 

You can change the application setup or add further dependencies (but do not replace Vue.js ;)) if you need to.

### Tasks

If any of the instructions or requirements are not clear and allow multiple solutions, you can make assumptions.
Feel free to document them in the code or in `COMMENTS.md`.

1. Display all products in a list or table like structure. For each product show the following properties:
           
    - thumbnail
    - id
    - title
    - category
    - average rating
    - price
       
2. Set a background color for each listed product item. The color depends on the product category.
3. Only display products with a price lower or equal to 100
4. Add a button that sorts the products by price when clicked
5. _Bonus:_ Add a possibility to delete products
    
   - No server side action is required
   - It's fine when the product reappears on page reload 

7. _Bonus:_ Implement tests for filtering products

