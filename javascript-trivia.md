# Javascript Trivia

## 1. implicit returns in java?
  - single line arrow functions
  - functions invoked with ‘new’ keyword
  - async functions return a promise

## 2. falsey values in js?
  - NaN
  - 0
  - null 
  - undefined
  - “” 
  - false
  - document.all

## 3. value of x?
``` javascript
	var y = 1, x = y = typeof x
```
	
  - x is “undefined”

## 4. type of null/undefined?
  - type of null = “object”
    - an intentional nothing
  - type of undefined = “undefined” 
    - could be unintentional

## 5. value of `this` inside setTimeout?
  - window, unless function is bound

## 6. does js pass parameter by value or reference?
  - objects get passed as reference
  - primitives get passed as values

## 7. is there any diff between window and document?
  -   the document is an object that lives on the window (there are many other items that live on the window)
  - window belongs to the browser
  - document is a tree of nodes of your html elements
  - **document is the DOM (!!!)**

    ### a. do `document.onload` and `window.onload` fire at the same time?
      - document! because it will finish loading before the window loads bc it window needs to wait for all its other children to load

## 8. different ways to get an element from the DOM?
  - `document.getElementById` - return HTML elements
  - `document.getElementByClassName, document.getElementByTagName` - return HTML elements
  - `document.querySelector, document.querySelectorAll` - returns nodeList

## 9. the fastest way to select elements by using css selectors?
  - `document.getElementById` is the fastest because you have unique ids
  - class(`.myClass`)
  - tag(`div, p`)
  - sibling(`div + p, div ~ p`)
  - child(`div > p`), 
  - descendant(`div p`)
  - universal(`*`)
  - attribute(`input[type="text]`)
  - psuedo(`p:first-child`)

    #### what do these return?
    - `document.getElementsByTagName` --> HTMLCollection
    - `document.querySelectorAll` --> NodeList
    - both are array like objects (you can call forEach on a node list, but not on HTMLCollections - for those you need to call Array.from on it)

## 10. how would you implement `getElementsByAttribute`?

  ``` javascript
    function getElementsByAttribute(attr) {
        const all = document.querySelectorAll('*');
        const found = []

        all.forEach(node => {
            if (node.getAttribute(attr)) {
                found.push(node)
            }
        })

        return found;
    }

    // -> returns an array of all the links on a page
    getElementsByAttribute('href') 
  ```

  ## 11. how would you add a class to an element by query selector?
  
  ``` javascript
    function addClass(selector, className) {
        const el = document.querySelector(selector)

        if (el) {
            el.classList.add(className);
        }
    }

    // -> changed post title to be styled like the site title 
    addClass('.post-title', 'site-title')
  ```

  ## 12. how could i verify if one element is a child of another?

  ``` javascript
    function isDescendant(parent, child) {

    }
  ```